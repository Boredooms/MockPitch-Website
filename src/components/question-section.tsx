import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { ArrowLeft, ArrowRight, Check, ChevronsRight, Volume2, VolumeX } from "lucide-react";
import { RecordAnswer } from "./record-answer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface QuestionSectionProps {
  questions: { question: string; answer: string }[];
  mockId: string;
}

export const QuestionSection = ({ questions, mockId }: QuestionSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWebCam, setIsWebCam] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const [currentSpeech, setCurrentSpeech] =
    useState<SpeechSynthesisUtterance | null>(null);

  const navigate = useNavigate();

  const handlePlayQuestion = (qst: string) => {
    if (isPlaying && currentSpeech) {
      // stop the speech if already playing
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentSpeech(null);
    } else {
      if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(qst);
        window.speechSynthesis.speak(speech);
        setIsPlaying(true);
        setCurrentSpeech(speech);

        // handle the speech end
        speech.onend = () => {
          setIsPlaying(false);
          setCurrentSpeech(null);
        };
      }
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestion === questions.length - 1) {
      navigate(`/generate/feedback/${mockId}`);
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  return (
    <div className="w-full min-h-96 border rounded-md p-4">
      <Tabs
        defaultValue={questions[0]?.question}
        className="w-full space-y-12"
        orientation="vertical"
        value={questions[activeQuestion]?.question}
      >
        <TabsList className="bg-transparent w-full flex flex-wrap items-center justify-start gap-4">
          {questions?.map((tab, i) => (
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-emerald-200 data-[state=active]:shadow-md text-xs px-2"
              )}
              key={tab.question}
              value={tab.question}
              onClick={() => setActiveQuestion(i)}
            >
              {`Question #${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>

        {questions?.map((tab, i) => (
          <TabsContent key={i} value={tab.question}>
            <p className="text-base text-left tracking-wide text-neutral-500">
              {tab.question}
            </p>

            <div className="w-full flex items-center justify-end">
              <TooltipButton
                content={isPlaying ? "Stop" : "Start"}
                icon={
                  isPlaying ? (
                    <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
                  ) : (
                    <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
                  )
                }
                onClick={() => handlePlayQuestion(tab.question)}
              />
            </div>

            <RecordAnswer
              question={tab}
              isWebCam={isWebCam}
              setIsWebCam={setIsWebCam}
              activeQuestion={activeQuestion}
            />
          </TabsContent>
        ))}

        <div className="w-full flex items-center justify-center gap-4">
          {activeQuestion !== 0 && (
            <Button
              variant={"outline"}
              onClick={() => setActiveQuestion(activeQuestion - 1)}
            >
              <ArrowLeft />
              Prev
            </Button>
          )}
          <Button onClick={handleNextQuestion}>
            {activeQuestion === questions.length - 1 ? (
              <>
                End Interview <Check />
              </>
            ) : (
              <>
                Next <ArrowRight />
              </>
            )}
          </Button>
        </div>
      </Tabs>
    </div>
  );
};
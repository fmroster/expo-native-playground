import {
  Host,
  HStack,
  ProgressView,
  Slider,
  Text as UIText,
  VStack,
} from "@expo/ui/swift-ui";
import { background, cornerRadius, padding } from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";
const fromSadToHappy = [
  "😭",
  "😢",
  "☹️",
  "😕",
  "😐",
  "🙂",
  "😊",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "🥳",
];

const fromSadToHappyStrings = [
  "Devastated",
  "Very sad",
  "Sad",
  "A bit sad",
  "Neutral",
  "Slightly happy",
  "Happy",
  "Cheerful",
  "Very happy",
  "Joyful",
  "Excited",
  "Laughing",
  "Hilarious",
  "Rolling with laughter",
  "Celebrating",
];

export default function NormalView() {
  const [mood, setMood] = useState("happy");
  const [emoji, setEmoji] = useState("😊");
  return (
    <Host matchContents>
      <VStack modifiers={[background("#FFF"), cornerRadius(16)]}>
        <HStack spacing={32} modifiers={[padding({ all: 16 })]}>
          <VStack>
            <UIText>{emoji}</UIText>
          </VStack>

          <VStack spacing={16}>
            <UIText>{mood}</UIText>
            <Slider
              value={fromSadToHappyStrings.indexOf(mood)}
              step={1}
              max={fromSadToHappyStrings.length - 1}
              onValueChange={(value: number) => {
                const roundedNumber = Math.round(value);
                setEmoji(fromSadToHappy[roundedNumber]);
                setMood(fromSadToHappyStrings[roundedNumber]);
              }}
            />
          </VStack>
        </HStack>

        <ProgressView
          value={
            (fromSadToHappyStrings.indexOf(mood) + 1) /
            (fromSadToHappyStrings.length - 1)
          }
        />
      </VStack>
    </Host>
  );
}

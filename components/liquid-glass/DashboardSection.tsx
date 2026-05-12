import {
  Button,
  Gauge,
  HStack,
  Section,
  Slider,
  Text,
  VStack,
} from "@expo/ui/swift-ui";
import { foregroundStyle, frame, gaugeStyle } from "@expo/ui/swift-ui/modifiers";
import React, { use } from "react";
import { AppContext } from "./AppContext";
import { AppState } from "./types";

export function DashboardSection() {
  const {
    tasks,
    productivityScore,
    setProductivityScore,
    focusLevel,
    setFocusLevel,
  } = use(AppContext) as AppState;

  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks > 0 ? completedTasks / totalTasks : 0;

  const highPriorityTasks = tasks.filter(
    (t) => t.priority === "high" && !t.completed
  ).length;
  const urgentTasksRate = totalTasks > 0 ? highPriorityTasks / totalTasks : 0;

  return (
    <Section title="📊 Performance Dashboard">
      <VStack spacing={20}>
        {/* Task Metrics Row */}
        <VStack spacing={12}>
          <Text>Task Completion Metrics</Text>
          <HStack spacing={16}>
            <Gauge
              value={completionRate}
              currentValueLabel={<Text>{`${Math.round(completionRate * 100)}%`}</Text>}
              modifiers={[frame({ width: 100, height: 100 }), gaugeStyle("circular")]}
            />
            <VStack spacing={4} alignment="leading">
              <Text>Completion Rate</Text>
              <Text modifiers={[foregroundStyle("gray")]}>
                {`${completedTasks} of ${totalTasks} completed`}
              </Text>
            </VStack>
          </HStack>
        </VStack>

        {/* Gauge Variants Showcase */}
        <VStack spacing={12}>
          <Text>Gauge Component Variants</Text>

          {/* Circular Gauges */}
          <HStack spacing={16}>
            <VStack spacing={8} alignment="center">
              <Gauge
                value={productivityScore}
                currentValueLabel={<Text>{`${Math.round(productivityScore * 100)}%`}</Text>}
                modifiers={[frame({ width: 80, height: 80 }), gaugeStyle("circular")]}
              />
              <Text>Circular</Text>
            </VStack>

            <VStack spacing={8} alignment="center">
              <Gauge
                value={focusLevel}
                currentValueLabel={<Text>{`${Math.round(focusLevel * 100)}%`}</Text>}
                modifiers={[frame({ width: 80, height: 80 }), gaugeStyle("circularCapacity")]}
              />
              <Text>Circular Capacity</Text>
            </VStack>

            <VStack spacing={8} alignment="center">
              <Gauge
                value={urgentTasksRate}
                currentValueLabel={<Text>{`${highPriorityTasks}`}</Text>}
                modifiers={[frame({ width: 80, height: 80 }), gaugeStyle("circularCapacity")]}
              />
              <Text>Multi-Color</Text>
            </VStack>
          </HStack>

          {/* Linear Gauges */}
          <VStack spacing={8}>
            <Text>Linear Gauge Types</Text>

            <VStack spacing={4}>
              <Text modifiers={[foregroundStyle("gray")]}>
                Default Linear
              </Text>
              <Gauge
                value={completionRate}
                modifiers={[gaugeStyle("automatic")]}
              />
            </VStack>

            <VStack spacing={4}>
              <Text modifiers={[foregroundStyle("gray")]}>
                Linear
              </Text>
              <Gauge
                value={productivityScore}
                modifiers={[gaugeStyle("linear")]}
              />
            </VStack>

            <VStack spacing={4}>
              <Text modifiers={[foregroundStyle("gray")]}>
                Linear Capacity
              </Text>
              <Gauge
                value={focusLevel}
                modifiers={[gaugeStyle("linearCapacity")]}
              />
            </VStack>

            <VStack spacing={4}>
              <Text modifiers={[foregroundStyle("gray")]}>
                Gradient Linear
              </Text>
              <Gauge
                value={(productivityScore + focusLevel) / 2}
                modifiers={[gaugeStyle("linear")]}
              />
            </VStack>
          </VStack>
        </VStack>

        {/* Interactive Sliders */}
        <VStack spacing={12}>
          <Text>Interactive Controls</Text>

          <VStack spacing={8}>
            <HStack spacing={12} alignment="center">
              <Text>Productivity Score:</Text>
              <Text modifiers={[foregroundStyle("blue")]}>
                {`${Math.round(productivityScore * 100)}%`}
              </Text>
            </HStack>
            <Slider
              value={productivityScore}
              onValueChange={setProductivityScore}
            />
          </VStack>

          <VStack spacing={8}>
            <HStack spacing={12} alignment="center">
              <Text>Focus Level:</Text>
              <Text modifiers={[foregroundStyle("purple")]}>
                {`${Math.round(focusLevel * 100)}%`}
              </Text>
            </HStack>
            <Slider value={focusLevel} onValueChange={setFocusLevel} />
          </VStack>
        </VStack>

        {/* Action Buttons */}
        <VStack spacing={8}>
          <Text>Quick Actions</Text>
          <HStack spacing={12}>
            <Button
              onPress={() => {
                setProductivityScore(Math.random());
                setFocusLevel(Math.random());
              }}
              systemImage="shuffle"
              label="Randomize"
            />
          </HStack>
        </VStack>
      </VStack>
    </Section>
  );
}

import IconAIChartAnalyzeInactive from "@/assets/IconAIChartAnalyzeInactive.svg?react";
import IconAIChartAnalyzeActive from "@/assets/IconAIChartAnalyzeActive.svg?react";
import IconAIChartRecommendInactive from "@/assets/IconAIChartRecommendInactive.svg?react";
import IconAIChartRecommendActive from "@/assets/IconAIChartRecommendActive.svg?react";
import IconFunctionHelpInactive from "@/assets/IconFunctionHelpInactive.svg?react";
import IconFunctionHelpActive from "@/assets/IconFunctionHelpActive.svg?react";
import FloatingPanelLayout from "./FloatingPanelLayout";
import { useTab } from "@/hooks/useTab";
import AIChartAnalyze from "./AIChartAnalyze";
import AIChartRecommendation from "./AIChartRecommendation";
import FunctionHelp from "./FunctionHelp";

export default function FloatingPanel() {
  const TabKey = {
    CHART_ANALYZE: "CHART_ANALYZE",
    CHART_RECOMMENDATION: "CHART_RECOMMENDATION",
    FUNCTION_HELP: "FUNCTION_HELP",
  } as const;

  const { Tabs } = useTab<keyof typeof TabKey>(TabKey.CHART_ANALYZE);

  const tabItems = [
    {
      key: TabKey.CHART_ANALYZE,
      label: "AI 차트해석",
      activeIcon: <IconAIChartAnalyzeActive />,
      inactiveIcon: <IconAIChartAnalyzeInactive />,
      content: <AIChartAnalyze />,
    },
    {
      key: TabKey.CHART_RECOMMENDATION,
      label: "AI 추천판단",
      activeIcon: <IconAIChartRecommendActive />,
      inactiveIcon: <IconAIChartRecommendInactive />,
      content: <AIChartRecommendation />,
    },
    {
      key: TabKey.FUNCTION_HELP,
      label: "기능 도움말",
      activeIcon: <IconFunctionHelpActive />,
      inactiveIcon: <IconFunctionHelpInactive />,
      content: <FunctionHelp />,
    },
  ];

  return (
    <FloatingPanelLayout>
      <Tabs>
        <Tabs.List>
          {tabItems.map(({ key, label, activeIcon, inactiveIcon }) => (
            <Tabs.Trigger
              key={key}
              value={key}
              activeIcon={activeIcon}
              inactiveIcon={inactiveIcon}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.ContentWrapper>
          {tabItems.map(({ key, content }) => (
            <Tabs.Content key={key} value={key}>
              {content}
            </Tabs.Content>
          ))}
        </Tabs.ContentWrapper>
      </Tabs>
    </FloatingPanelLayout>
  );
}

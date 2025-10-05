import styled, { css } from "styled-components";

interface Tab {
  label: string;
  value: string;
}

type TabNavigationProps = {
  tabs: { label: string; value: string }[];
  activeTab: string; // 👈 controlled by parent
  onChange?: (value: string) => void;
  fullWidth?: boolean;
};

const TabContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  justify-content: ${({ fullWidth }) =>
    fullWidth ? "space-between" : "flex-start"};
  align-items: center;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 4px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${({ active }) => (active ? "#fff" : "#555")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  ${({ active }) =>
    active &&
    css`
      background: #007bff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    `}

  &:hover {
    background: ${({ active }) => (active ? "#0069d9" : "rgba(0, 0, 0, 0.05)")};
  }
`;

const TabNavigation = ({
  tabs,
  activeTab,
  onChange,
  fullWidth = false,
}: TabNavigationProps) => {
  return (
    <div style={{ display: "flex", width: fullWidth ? "100%" : "auto" }}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          style={{
            flex: fullWidth ? 1 : undefined,
            padding: "8px 16px",
            border: "none",
            borderBottom:
              activeTab === tab.value
                ? "2px solid dodgerblue"
                : "2px solid transparent",
            background: "none",
            color: activeTab === tab.value ? "dodgerblue" : "#666",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onClick={() => onChange?.(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;

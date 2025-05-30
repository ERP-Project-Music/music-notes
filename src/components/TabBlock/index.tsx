import React from 'react';
import { TabBlockProps, TabType } from './types';
import './style.css';

const TUNINGS: Record<TabType, Record<string, string[]>> = {
  [TabType.Guitar]: {
    E: ['e', 'B', 'G', 'D', 'A', 'E'],
  },
};

const TabBlock: React.FC<TabBlockProps> = ({
  tab,
  type = TabType.Guitar,
  tuning = 'E',
  width = '100%',
}) => {
  const labels = [...(TUNINGS[type]?.[tuning] || [])];
  const maxColumns = Math.max(...tab.map((val) => val.length));

  return (
    <div className="tab-container" style={{ width }}>
      <table className="tab-table">
        <tbody className="tab-body">
          {labels.map((label, i) => {
            const stringFrets = tab[i] || [];

            return (
              <tr key={i} className="tab-row">
                <td className="tab-label">{label}</td>
                {Array.from({ length: maxColumns }).map((_, j) => {
                  const val = stringFrets[j];
                  return (
                    <td key={j} className="tab-note">
                      <span>{val ?? ''}</span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TabBlock;

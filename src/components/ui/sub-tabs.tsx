
import * as React from "react"
import { cn } from "@/lib/utils"

interface SubTabsProps {
  tabs: Array<{
    id: string
    label: string
    content: React.ReactNode
    icon?: React.ReactNode
  }>
  defaultTab?: string
  className?: string
}

const SubTabs: React.FC<SubTabsProps> = ({ 
  tabs, 
  defaultTab, 
  className 
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0]?.id)

  return (
    <div className={cn("w-full", className)}>
      {/* Sub-tab Navigation */}
      <div className="flex flex-wrap gap-2 p-2 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
              "hover:bg-white/80 dark:hover:bg-slate-700/80 hover:shadow-sm",
              activeTab === tab.id
                ? "bg-white dark:bg-slate-700 text-primary shadow-md border border-slate-200 dark:border-slate-600 scale-105"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.icon && (
              <span className="w-4 h-4 flex items-center justify-center">
                {tab.icon}
              </span>
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sub-tab Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  )
}

export { SubTabs }

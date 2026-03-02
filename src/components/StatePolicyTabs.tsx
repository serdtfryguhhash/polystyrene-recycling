"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Ban,
  ShieldAlert,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Gavel,
  Lightbulb,
  MapPin,
} from "lucide-react";

import type { PolicyItem } from "@/data/polystyrene-data";

interface StatePolicyTabsProps {
  policies: PolicyItem[];
}

type TabKey = "ban" | "restriction" | "no-ban";

interface TabConfig {
  key: TabKey;
  label: string;
  icon: React.ReactNode;
  activeClasses: string;
  inactiveClasses: string;
  summary: (count: number) => string;
}

const TAB_CONFIG: TabConfig[] = [
  {
    key: "ban",
    label: "Banned",
    icon: <Ban className="w-4 h-4" />,
    activeClasses:
      "bg-red-500/20 text-red-400 border-red-500/50 shadow-red-500/10 shadow-lg",
    inactiveClasses:
      "border-red-500/20 text-red-400/60 hover:border-red-500/40 hover:text-red-400",
    summary: (count: number) =>
      `${count} state${count !== 1 ? "s have" : " has"} enacted full bans on polystyrene food service containers`,
  },
  {
    key: "restriction",
    label: "Restricted",
    icon: <ShieldAlert className="w-4 h-4" />,
    activeClasses:
      "bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-amber-500/10 shadow-lg",
    inactiveClasses:
      "border-amber-500/20 text-amber-400/60 hover:border-amber-500/40 hover:text-amber-400",
    summary: (count: number) =>
      `${count} state${count !== 1 ? "s have" : " has"} partial restrictions or pending legislation`,
  },
  {
    key: "no-ban",
    label: "Not Banned",
    icon: <ShieldCheck className="w-4 h-4" />,
    activeClasses:
      "bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-emerald-500/10 shadow-lg",
    inactiveClasses:
      "border-emerald-500/20 text-emerald-400/60 hover:border-emerald-500/40 hover:text-emerald-400",
    summary: (count: number) =>
      `${count} state${count !== 1 ? "s have" : " has"} no current bans or restrictions on polystyrene`,
  },
];

function BannedStateCard({ policy }: { policy: PolicyItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 rounded-xl"
      aria-expanded={expanded}
      aria-label={`${policy.state} ban details. ${expanded ? "Click to collapse" : "Click to expand"}`}
    >
      <Card
        className={`bg-card border-border/50 border-l-4 border-l-red-500/50 transition-all duration-300 cursor-pointer ${
          expanded
            ? "bg-red-950/20 border-red-500/30"
            : "hover:border-border/80"
        }`}
      >
        <CardContent className="p-5">
          {/* Collapsed header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-red-400 shrink-0" />
              <span className="font-semibold text-foreground">
                {policy.state}
              </span>
              <Badge
                variant="outline"
                className="text-[11px] bg-red-500/10 text-red-400 border-red-500/25"
              >
                {policy.abbreviation}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground tabular-nums">
                {policy.year}
              </span>
              {expanded ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform" />
              )}
            </div>
          </div>

          {/* Expanded details */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              expanded
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-4">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {policy.description}
                </p>

                {/* Why It Was Banned */}
                {policy.banReason && (
                  <div className="pl-4 border-l-2 border-red-500/40 space-y-1">
                    <div className="flex items-center gap-2">
                      <Gavel className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                        Why It Was Banned
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {policy.banReason}
                    </p>
                  </div>
                )}

                {/* Efforts to Overturn */}
                {policy.unbanEfforts && (
                  <div className="pl-4 border-l-2 border-amber-500/40 space-y-1">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        Efforts to Overturn
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {policy.unbanEfforts}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

function RestrictedStateCard({ policy }: { policy: PolicyItem }) {
  return (
    <Card className="bg-card border-border/50 border-l-4 border-l-amber-500/50">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-foreground">
              {policy.state}
            </span>
            <Badge
              variant="outline"
              className="text-[11px] bg-amber-500/10 text-amber-400 border-amber-500/25"
            >
              {policy.abbreviation}
            </Badge>
          </div>
          <span className="text-sm text-muted-foreground tabular-nums shrink-0">
            {policy.year}
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {policy.description}
        </p>
      </CardContent>
    </Card>
  );
}

function NoBanStateCard({ policy }: { policy: PolicyItem }) {
  return (
    <Card className="bg-card border-border/50 border-l-4 border-l-emerald-500/50">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="font-medium text-foreground text-sm">
            {policy.state}
          </span>
          <Badge
            variant="outline"
            className="text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
          >
            {policy.abbreviation}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {policy.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function StatePolicyTabs({ policies }: StatePolicyTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("ban");

  const grouped: Record<TabKey, PolicyItem[]> = {
    ban: [],
    restriction: [],
    "no-ban": [],
  };

  for (const policy of policies) {
    if (grouped[policy.type]) {
      grouped[policy.type].push(policy);
    }
  }

  // Sort each group alphabetically by state name
  for (const key of Object.keys(grouped) as TabKey[]) {
    grouped[key].sort((a, b) => a.state.localeCompare(b.state));
  }

  const activeConfig = TAB_CONFIG.find((t) => t.key === activeTab)!;
  const activeItems = grouped[activeTab];

  return (
    <div className="space-y-6">
      {/* Tab buttons */}
      <div
        className="flex flex-wrap gap-3"
        role="tablist"
        aria-label="State policy categories"
      >
        {TAB_CONFIG.map((tab) => {
          const count = grouped[tab.key].length;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.key}`}
              id={`tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive ? tab.activeClasses : tab.inactiveClasses
              }`}
            >
              {tab.icon}
              <span>
                {tab.label}{" "}
                <span className="opacity-80">({count})</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="transition-opacity duration-300"
      >
        {/* Summary stat */}
        <p className="text-sm text-muted-foreground mb-5 flex items-center gap-2">
          {activeConfig.icon}
          {activeConfig.summary(activeItems.length)}
        </p>

        {/* Banned tab */}
        {activeTab === "ban" && (
          <div className="space-y-3">
            {activeItems.map((policy) => (
              <BannedStateCard key={policy.abbreviation} policy={policy} />
            ))}
            {activeItems.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">
                No banned states found.
              </p>
            )}
          </div>
        )}

        {/* Restricted tab */}
        {activeTab === "restriction" && (
          <div className="space-y-3">
            {activeItems.map((policy) => (
              <RestrictedStateCard key={policy.abbreviation} policy={policy} />
            ))}
            {activeItems.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">
                No restricted states found.
              </p>
            )}
          </div>
        )}

        {/* Not Banned tab */}
        {activeTab === "no-ban" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeItems.map((policy) => (
              <NoBanStateCard key={policy.abbreviation} policy={policy} />
            ))}
            {activeItems.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8 col-span-full">
                No states found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

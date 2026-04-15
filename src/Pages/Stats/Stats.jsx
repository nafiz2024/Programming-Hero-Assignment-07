import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { BookContext } from '../../Context/Context';

const Stats = () => {
    const { timeline } = useContext(BookContext);

    // Build chart data by counting interaction types from the shared timeline state.
    const statsData = [
        {
            name: 'Text',
            value: timeline.filter((item) => item.type === 'text').length,
            color: '#7C3AED',
        },
        {
            name: 'Call',
            value: timeline.filter((item) => item.type === 'call').length,
            color: '#1F5D4B',
        },
        {
            name: 'Video',
            value: timeline.filter((item) => item.type === 'video').length,
            color: '#2FA866',
        },
    ];

    // Total interactions shown in the summary card on the right.
    const totalInteractions = statsData.reduce((total, item) => total + item.value, 0);

    return (
        <div className="section-fade-in bg-[#F8FAFC] min-h-screen px-5 py-20 lg:px-0">
            <div className="container mx-auto max-w-5xl space-y-8">
                <div className="space-y-3">
                    <span className="inline-flex rounded-full border border-[#DDE6EE] bg-white px-4 py-2 text-sm font-semibold text-[#244D3F] shadow-sm">
                        Insight Dashboard
                    </span>
                    <h1 className="text-4xl font-bold text-[#1F2937]">Friendship Analytics</h1>
                    <p className="max-w-2xl text-base leading-7 text-[#64748B]">
                        A quick snapshot of how your recent check-ins are distributed across calls,
                        texts, and video conversations.
                    </p>
                </div>

                {/* Left column: donut chart. Right column: totals and per-type breakdown. */}
                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_260px]">
                    <div className="interactive-card h-full overflow-hidden rounded-3xl border border-[#E7EDF3] bg-white p-6 shadow-sm">
                        <div className="absolute" />
                        <p className="text-xl font-medium text-[#244D3F]">
                            By Interaction Type
                        </p>
                        {/* ResponsiveContainer keeps the chart responsive inside the card. */}
                        <div className="h-[360px]">
                            {totalInteractions > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={statsData}
                                            dataKey="value"
                                            nameKey="name"
                                            innerRadius={92}
                                            outerRadius={132}
                                            paddingAngle={4}
                                            stroke="none"
                                        >
                                            {statsData.map((entry) => (
                                                <Cell key={entry.name} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{
                                                borderRadius: '16px',
                                                border: '1px solid #E7EDF3',
                                                boxShadow: '0 16px 40px rgba(36,77,63,0.10)',
                                            }}
                                        />
                                        <Legend verticalAlign="bottom" iconType="circle" />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#DDE6EE] bg-[#F8FAFC] text-3xl text-[#244D3F]">
                                        0
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-semibold text-[#1F2937]">No interactions yet</h2>
                                        <p className="max-w-sm text-sm leading-6 text-[#64748B]">
                                            Start with a Call, Text, or Video from a friend details page to populate this chart.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex h-full flex-col gap-4">
                        <div className="interactive-card rounded-3xl border border-[#E7EDF3] bg-white p-6 shadow-sm">
                            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#94A3B8]">
                                Total Interaction
                            </p>
                            <h2 className="mt-3 text-4xl font-bold text-[#244D3F]">
                                {totalInteractions}
                            </h2>
                            <p className="mt-3 text-sm text-[#64748B]">
                                Counted from your latest saved check-ins.
                            </p>
                        </div>

                        {statsData.map((item) => (
                            <div
                                key={item.name}
                                className="interactive-card flex-1 rounded-2xl border border-[#E7EDF3] bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="h-3 w-3 rounded-full shadow-sm"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <div>
                                            <p className="font-semibold text-[#1F2937]">{item.name}</p>
                                            <p className="text-xs text-[#94A3B8]">Interaction type</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-semibold text-[#244D3F]">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;

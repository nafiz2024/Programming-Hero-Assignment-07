import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { BookContext } from '../../Context/Context';

const Stats = () => {
    const { timeline } = useContext(BookContext);

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

    const totalFriends = statsData.reduce((total, item) => total + item.value, 0);

    return (
        <div className="bg-[#F8FAFC] min-h-screen px-5 py-20 lg:px-0">
            <div className="container mx-auto max-w-5xl space-y-8">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-[#1F2937]">Friendship Analytics</h1>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_260px]">
                    <div className="h-full rounded-3xl border border-[#E7EDF3] bg-white p-6 shadow-sm">
                        <p className="text-xl font-medium text-[#244D3F]">
                            By Interaction Type
                        </p>
                        <div className="h-[360px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={statsData}
                                        dataKey="value"
                                        nameKey="name"
                                        innerRadius={90}
                                        outerRadius={130}
                                        paddingAngle={4}
                                        stroke="none"
                                    >
                                        {statsData.map((entry) => (
                                            <Cell key={entry.name} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="flex h-full flex-col gap-4">
                        <div className="rounded-3xl border border-[#E7EDF3] bg-white p-6 shadow-sm">
                            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#94A3B8]">
                                Total Interaction
                            </p>
                            <h2 className="mt-3 text-4xl font-bold text-[#244D3F]">
                                {totalFriends}
                            </h2>
                        </div>

                        {statsData.map((item) => (
                            <div
                                key={item.name}
                                className="flex-1 rounded-2xl border border-[#E7EDF3] bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="h-3 w-3 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <p className="font-semibold text-[#1F2937]">{item.name}</p>
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

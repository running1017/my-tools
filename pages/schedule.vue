<template>
    <v-container>
        <v-row>
            <h1>スケジュール整形</h1>
        </v-row>
        <v-row>
            <p>ああああああ</p>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-card-text>
                        <v-textarea
                            v-model="schedule"
                            readonly
                            solo
                            rows="3"
                            flat
                        ></v-textarea>
                    </v-card-text>
                    <v-btn @click="copyToClipboard">コピー</v-btn>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-container>
                        <v-row>
                            <v-col
                                v-for="value in values"
                                :key="value.id"
                                cols="12"
                            >
                                <TimeSelector
                                    :value="
                                        values.find((el) => el.id == value.id)
                                    "
                                    :step-minutes="stepMinutes"
                                    :start-time="startTime"
                                    :end-time="endTime"
                                    @input="updateValue"
                                    @delete="deleteValue(value.id)"
                                />
                                <v-divider></v-divider>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-tooltip top>
                            <template #activator="{ on, attrs }">
                                <v-btn
                                    icon
                                    class="ml-6 mb-2"
                                    v-bind="attrs"
                                    @click="addValue"
                                    v-on="on"
                                >
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                </v-btn>
                            </template>
                            <span>追加</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template #activator="tooltipActivator">
                                <v-menu :close-on-content-click="false">
                                    <template #activator="menuActivator">
                                        <v-btn
                                            v-bind="menuActivator.attrs"
                                            icon
                                            class="mx-6 mb-2"
                                            v-on="{
                                                ...tooltipActivator.on,
                                                ...menuActivator.on,
                                            }"
                                        >
                                            <v-icon>mdi-cog</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card flat>
                                        <v-container>
                                            <v-row>
                                                <v-col>
                                                    <v-subheader>
                                                        時刻幅選択
                                                    </v-subheader>
                                                    <v-card-text>
                                                        <v-select
                                                            v-model="startTime"
                                                            dense
                                                            :items="
                                                                startTimeChoices
                                                            "
                                                        ></v-select>
                                                        <v-select
                                                            v-model="endTime"
                                                            dense
                                                            :items="
                                                                endTimeChoices
                                                            "
                                                        ></v-select>
                                                    </v-card-text>
                                                </v-col>
                                            </v-row>
                                            <v-divider></v-divider>
                                            <v-row>
                                                <v-col>
                                                    <v-subheader>
                                                        選択ステップ
                                                    </v-subheader>
                                                    <v-card-text>
                                                        <v-select
                                                            v-model="
                                                                stepMinutes
                                                            "
                                                            dense
                                                            :items="
                                                                stepMinutesChoices
                                                            "
                                                        ></v-select>
                                                    </v-card-text>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card>
                                </v-menu>
                            </template>
                            <span>設定</span>
                        </v-tooltip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "SchedulePage",
    data: () => ({
        values: [
            {
                date: new Date().toISOString().substr(0, 10),
                timeRange: [10, 12],
                id: 0,
            },
        ],
        stepMinutesChoices: [
            { text: "15分刻み", value: 15 },
            { text: "30分刻み", value: 30 },
            { text: "1時間刻み", value: 60 },
        ],
        stepMinutes: 30, // 1時間を何分割するか
        startTimeChoices: [
            { text: "00:00", value: 0.0 },
            { text: "06:00", value: 6.0 },
            { text: "08:00", value: 8.0 },
        ],
        startTime: 8.0, // 開始時刻
        endTimeChoices: [
            { text: "18:00", value: 18.0 },
            { text: "20:00", value: 20.0 },
            { text: "24:00", value: 24.0 },
        ],
        endTime: 18.0, // 終了時刻
    }),
    computed: {
        formattedValues() {
            const formatted = {};
            this.values.forEach((value) => {
                if (formatted[value.date]) {
                    formatted[value.date].push(value.timeRange);
                } else {
                    formatted[value.date] = [value.timeRange];
                }
            });
            return formatted;
        },
        schedule() {
            return Object.keys(this.formattedValues)
                .map((date) => {
                    const formattedDate = this.dateFormatter(date);
                    const formattedTime = this.timeListFormatter(
                        this.formattedValues[date]
                    );
                    return formattedDate + formattedTime;
                })
                .join("\n");
        },
    },
    methods: {
        dateFormatter(dateStr) {
            const dateObj = new Date(dateStr);
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const date = String(dateObj.getDate()).padStart(2, "0");
            const daysName = ["日", "月", "火", "水", "木", "金", "土"];
            const day = daysName[dateObj.getDay()];
            return `${month}/${date}（${day}）`;
        },
        timeListFormatter(timeList) {
            return timeList
                .map(([start, end]) => {
                    const startStr = this.timeFormatter(start);
                    const endStr = this.timeFormatter(end);
                    return `${startStr}～${endStr}`;
                })
                .join("、");
        },
        timeFormatter(time) {
            const hour = Math.floor(time);
            const minute = (time - Math.floor(time)) * 60;
            return (
                String(hour).padStart(2, "0") +
                ":" +
                String(minute).padStart(2, "0")
            );
        },
        addValue() {
            // idはユニークかつ単調増加
            const newValue =
                this.values.length === 0
                    ? {
                          date: new Date().toISOString().substr(0, 10),
                          timeRange: [0, 10],
                          id: -1,
                      }
                    : { ...this.values[this.values.length - 1] };
            newValue.id += 1;
            this.values.push(newValue);
        },
        deleteValue(id) {
            const deleteIndex = this.values.findIndex((el) => el.id === id);
            this.values.splice(deleteIndex, 1);
        },
        updateValue(value) {
            const updateIndex = this.values.findIndex(
                (el) => el.id === value.id
            );
            this.values.splice(updateIndex, 1, value);
        },
        copyToClipboard() {
            navigator.clipboard
                .writeText(this.schedule)
                .then(() => {
                    console.log("copied!");
                })
                .catch((e) => {
                    console.error(e);
                });
        },
    },
};
</script>

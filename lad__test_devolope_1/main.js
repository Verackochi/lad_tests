let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;


const englishDayOfWeekToRussian = {
    "понедельник": "monday",
    "вторник": "tuesday",
    "среда": "wednesday",
    "четверг": "thursday",
    "пятница": "friday",
    "суббота": "saturday",
    "воскресенье": "sunday"
};


const russianDaysOfWeek = Object.keys(englishDayOfWeekToRussian);


const regexp = new RegExp(
    russianDaysOfWeek.join("|"),
    "gi"
);


const newStr = str.replace(regexp, (day) =>
    englishDayOfWeekToRussian[day.toLowerCase()].toUpperCase()
);

console.log({newStr});
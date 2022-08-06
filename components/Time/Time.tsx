import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import formatDistanceStrict from 'date-fns/formatDistanceStrict'
import ukLocale from 'date-fns/locale/uk';
import format from 'date-fns/format';
import isToday from "date-fns/isToday";
import isYesterday from 'date-fns/isYesterday'
import differenceInWeeks from 'date-fns/differenceInWeeks'
import isThisMinute from 'date-fns/isThisMinute'


interface TimeProps {
    date: number;
    short?: boolean;
}

const getWeekDay = (date: number) => {
    const day = format(date, 'EEEEEE', {locale: ukLocale}).split('')
    day[0] = day[0].toUpperCase()
    return day.join('');
}

const getShort = (date: number) => {
    if (isToday(date)) {
        return format(date, 'HH:mm');
    } else if (isYesterday(date)) {
        return 'Вчора';
    } else if (!differenceInWeeks(Date.now(), date)) {
        return getWeekDay(date);
    } else {
        return format(date, 'dd.MM.yy');
    }
}

const getLong = (date: number) => {
    if (isThisMinute(date)) {
        return formatDistanceToNow(date, {addSuffix: true, locale: ukLocale});
    } else if (isToday(date)) {
        return formatDistanceStrict(date, Date.now(), {addSuffix: true, locale: ukLocale});
    } else if (isYesterday(date)) {
        return `Вчора ${format(date, 'HH:mm')}`;
    } else if (!differenceInWeeks(Date.now(), date)) {
        return `${getWeekDay(date)}, ${format(date, 'HH:mm')}`;
    } else {
        return format(date, 'dd.MM.yy HH:mm');
    }
}

const Time: React.FC<TimeProps> = ({date, short = false}) => {
    if (short) {
        return (
            <>
                {getShort(date)}
            </>
        );
    }
    return (
        <>
            {getLong(date)}
        </>
    );
};

export default Time;
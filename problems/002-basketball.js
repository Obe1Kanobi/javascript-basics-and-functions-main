/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let team1Score = 0;
    let team2Score = 0;

    for (let i = 0; i < points.length; i++) {
        const [quarterScore1, quarterScore2] = points[i].split("-");
        team1Score += parseInt(quarterScore1);
        team2Score += parseInt(quarterScore2);
    }

    if (team1Score > team2Score) {
        return 1;
    } else if (team2Score > team1Score) {
        return 2;
    } else {
        return undefined;
    }
}

module.exports = getWinner;

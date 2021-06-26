import * as RankingService from "../services/RankingService";

let ranking;

function loadData() {
    return new Promise((resolve, reject) => {
        RankingService.getRanking().then((data) => {
            ranking = data;
            resolve();
        });
    });
}

export function genereteHeadquartersRanking() {
    return new Promise(async (resolve, reject) => {
        await loadData();

        if (ranking.length > 0) {
            let tempCities = [];
            let duplicates = [...tempCities];
            let citiesWithPoints = [];

            ranking.forEach((item) => {
                tempCities.push(item.city.toLowerCase());
            });

            const cities = [...new Set(tempCities)];

            cities.forEach((item) => {
                const i = duplicates.indexOf(item);
                duplicates = duplicates
                    .slice(0, i)
                    .concat(duplicates.slice(i + 1, duplicates.length));
            });

            cities.forEach((city) => {
                let cityNameSplit = city.split(" ");
                let compactName = "";

                cityNameSplit.forEach((word) => {
                    compactName + word[0];
                });

                citiesWithPoints.push({
                    compactName: compactName.toUpperCase(),
                    city: city,
                    users: 0,
                    points: 0,
                    passed: 0,
                    rejected: 0,
                });
            });

            ranking.forEach((user) => {
                citiesWithPoints.forEach((city) => {
                    if (user.city.toLowerCase() == city.city) {
                        city.points = city.points + user.points;
                        city.users = city.users + 1;
                        city.passed =
                            user.points >= 700 ? city.passed + 1 : city.passed;
                        city.rejected =
                            user.points < 700
                                ? city.rejected + 1
                                : city.rejected;
                    }
                });
            });

            setTimeout(() => {
                resolve(citiesWithPoints);
            }, 500);
        }
    });
}

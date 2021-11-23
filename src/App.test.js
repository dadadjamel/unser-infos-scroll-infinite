import User from "./components/User";

import { render, screen } from '@testing-library/react'

const userMock = {
    "gender": "female",
    "name": {
        "title": "Miss",
        "first": "Nuria",
        "last": "Jimenez"
    },
    "location": {
        "street": {
            "number": 6556,
            "name": "Avenida de Andalucía"
        },
        "city": "Alcobendas",
        "state": "Andalucía",
        "country": "Spain",
        "postcode": 63153,
        "coordinates": {
            "latitude": "-16.8982",
            "longitude": "124.9487"
        },
        "timezone": {
            "offset": "-4:00",
            "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
    },
    "email": "nuria.jimenez@example.com",
    "login": {
        "uuid": "b744a000-93b6-43e3-887b-8f8986fcf00d",
        "username": "sadleopard963",
        "password": "jagger",
        "salt": "pTAn6oXH",
        "md5": "1532874c1960913c3c4aab4fd28ab32c",
        "sha1": "d30a061d595dd7f0cf27f2e92d4c55f985295994",
        "sha256": "c23d7f46024ebb844a68fb5df1f5c1b1a31dd3f0c96e1ce5814654d7f2ad252f"
    },
    "dob": {
        "date": "1973-07-04T17:06:50.802Z",
        "age": 48
    },
    "registered": {
        "date": "2012-10-08T19:25:13.530Z",
        "age": 9
    },
    "phone": "939-790-083",
    "cell": "615-151-884",
    "id": {
        "name": "DNI",
        "value": "06832360-O"
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
    },
    "nat": "ES"
}

test("username exists", () => {
  const { queryByTestId } = render(
    <User user={userMock} />
  );
  expect(queryByTestId('usertest')).toBeNull();
});
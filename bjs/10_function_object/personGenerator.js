const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Рахим",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анастасия",
            "id_2": "Мария",
            "id_3": "Инна",
            "id_4": "Анна",
            "id_5": "Дарья",
            "id_6": "Елена",
            "id_7": "Жанна",
            "id_8": "Екатерина",
            "id_9": "Елизавета",
            "id_10": "Татьяна"
        }
    }`,
    malejobJson: `{
        "count": 10,
        "list": {     
            "id_1": "Грузчик",
            "id_2": "Электрик",
            "id_3": "Учитель",
            "id_4": "Слесарь",
            "id_5": "Спасатель",
            "id_6": "Полицейский",
            "id_7": "Военный",
            "id_8": "Токарь",
            "id_9": "Машинист",
            "id_10": "Крановщик"
        }
    }`,
    femalejobJson: `{
        "count": 10,
        "list": {     
            "id_1": "Воспитательница",
            "id_2": "Учительница",
            "id_3": "Стюардесса",
            "id_4": "Домохозяйка",
            "id_5": "Флорист",
            "id_6": "Кондитер",
            "id_7": "Медицинская сестра",
            "id_8": "Фотомодель",
            "id_9": "Визажист",
            "id_10": "Парикмахер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        return this.randomValue(gender === this.GENDER_MALE ? this.firstNameMaleJson : this.firstNameFemaleJson);

    },

    randomJob: function(gender) {
        return gender === this.GENDER_MALE ? this.randomValue(this.malejobJson) : this.randomValue(this.femalejobJson);
    },

    randomSurname: function(gender) {
        return gender === this.GENDER_MALE ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';

    },

    randomGender: function() {
        const gender = [this.GENDER_MALE, this.GENDER_FEMALE];
        const genderRandom = Math.round(Math.random()*(gender.length-1));
        return gender[genderRandom];
    },

    yearRandom: function() {
        const year = this.randomIntNumber(2005, 1970);
        return year + ' год рождения';
    },

    lastNameRandom: function(gender) {
        let lastname;
        const nameEnd = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
                if (nameEnd.slice(-2) === 'др') {
                    lastname = nameEnd.replace('др', 'дрович')};
                if (nameEnd.slice(-2) === 'им') {
                    lastname = nameEnd.replace('им', 'имович')};
                if (nameEnd.slice(-2) === 'ан') {
                    lastname = nameEnd.replace('ан', 'анович')};
                if (nameEnd.slice(-2) === 'ем') {
                    lastname = nameEnd.replace('ем', 'емович')};
                if (nameEnd.slice(-2) === 'ий') {
                    lastname = nameEnd.replace('ий', 'иевич')};
                if (nameEnd.slice(-2) === 'та') {
                    lastname = nameEnd.replace('та', 'тович')};
                if (nameEnd.slice(-2) === 'ил') {
                    lastname = nameEnd.replace('ил', 'йлович')};
                if (nameEnd.slice(-2) === 'ор') {
                    lastname = nameEnd.replace('ор', 'орович')};
                if (nameEnd.slice(-2) === 'ей') {
                    lastname = nameEnd.replace('ей', 'еевич')};
            return lastname;
        } else {
              if (nameEnd.slice(-2) === 'др') {
                lastname = nameEnd.replace('др', 'дровна')};
              if (nameEnd.slice(-2) === 'им') {
                lastname = nameEnd.replace('им', 'имовна')};
              if (nameEnd.slice(-2) === 'ан') {
                lastname = nameEnd.replace('ан', 'ановна')};
              if (nameEnd.slice(-2) === 'ем') {
                lastname = nameEnd.replace('ем', 'емовна')};
              if (nameEnd.slice(-2) === 'ий') {
                lastname = nameEnd.replace('ий', 'иевна')};
              if (nameEnd.slice(-2) === 'та') {
                lastname = nameEnd.replace('та', 'тична')};
              if (nameEnd.slice(-2) === 'ил') {
                lastname = nameEnd.replace('ил', 'йловна')};
              if (nameEnd.slice(-2) === 'ор') {
                lastname = nameEnd.replace('ор', 'оровна')};
              if (nameEnd.slice(-2) === 'ей') {
                lastname = nameEnd.replace('ей', 'еевна')};
            return lastname;
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.year = this.yearRandom();
        this.person.lastname = this.lastNameRandom();
        this.person.job = this.randomJob(this.person.gender);

        return this.person;
    }
};

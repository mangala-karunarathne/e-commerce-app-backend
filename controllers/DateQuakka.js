console.log(new Date().toISOString().substring(0, 10));

const end = new Date("2023-06-29");
    end.setHours(23, 59, 59, 999);

    console.log(end);
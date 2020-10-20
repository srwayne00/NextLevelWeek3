const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633", 
        lng: "-49.6435864",
        name: "Lar dos meninos",
        about: "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ ou vulnerabilidade social.",
        whatsapp: "163216516654",
        images: [
            "https://i.pinimg.com/564x/b8/77/bf/b877bf5fd842b80a7c8ab5e16c30a556.jpg",
            "https://i.pinimg.com/564x/b5/bb/87/b5bb87693f2593b8bd2c860790cb3e3a.jpg"
        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hours: "Horário de visitas Das 8h até as 18h",
        open_on_weekends: "0"
    })



    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    //Consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //deletar um dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})
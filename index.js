const { connect } = require("nats");
const servers = { servers: "localhost:4222" }

const start = async () => {
    try {
        const nc = await connect(servers)
        const jsm = await nc.jetstreamManager()
        const js = nc.jetstream()
        const stream = "SERVICE-STREAM"

        const streams = await jsm.streams.list()
        console.log(streams)

        // const streams = await jsm.streams.list().next();
        // streams.forEach((si) => {
        //     console.log(si);
        // });

        const si = await jsm.streams.info(stream)
        console.log(si)

        const consumers = await jsm.consumers.list(stream).next();
        consumers.forEach((ci) => {
            console.log(ci);
        });


    } catch (error) {
        console.error(error)
    }

}

start()
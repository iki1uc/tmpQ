function RUN_8_PIPELINE_9(station) {

    // RUN 8 – Aktivierung
    syn.start();
    sync.stabilize();
    arg.sync.route(station);

    station.X8.activate();     // neue X8-Schicht
    station.tmp.user.load();
    station.tmp.use.load();
    station.tmp.vector.route();

    // PIPELINE 9 – HOLO-Ausgang
    station.room.IN.open();
    station.room.CORE.process();
    station.room.OUT.holo();   // 9×9 HOLO-Matrix

    return "PIPELINE 9 ACTIVE";
}

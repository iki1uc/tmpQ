function RUN_8_PIPELINE_9(station) {

    // RUN 8 – Aktivierung
    syn.start();
    sync.stabilize();
    arg.sync.route(station);

    // X8-Schicht aktivieren
    station.X8.activate();

    // tmp-Funktionen laden
    station.tmp.user.load();
    station.tmp.use.load();
    station.tmp.vector.route();

    // PIPELINE 9 – HOLO-Ausgang
    station.room.IN.open();
    station.room.CORE.process();
    station.room.OUT.holo();   // 9×9 HOLO-Matrix

    return "PIPELINE 9 ACTIVE";
}

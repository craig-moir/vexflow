import { VexFlowTests } from './vexflow_test_helpers.js';
import { Dot } from '../src/dot.js';
const BPTuneTests = {
    Start() {
        QUnit.module('BBPTune');
        const run = VexFlowTests.runTests;
        run('Scotland the Brave Bar 1', scotlandTheBraveBar1);
        run('Scotland the Brave Bar 2', scotlandTheBraveBar2);
        run('Highland Harry Bar 2', highlandHarryBar2);
    },
};
const createNoteForStemTest = (duration, noteBuilder, keys, stem_direction, slash = false) => {
    const struct = { duration, slash };
    struct.stem_direction = stem_direction;
    struct.keys = keys;
    return noteBuilder(struct);
};
const stemExtensions = {
    "g/4": 0,
    "a/4": 1,
    "b/4": 2,
    "c/5": 3,
    "d/5": 4,
    "e/5": 5,
    "f/5": 6,
    "g/5": 7,
    "a/5": 8,
};
function createEmbellishment(f, keys, beams) {
    const graceNotes = [];
    keys.map((key) => {
        const gnote = createNoteForStemTest("32", f.GraceNote.bind(f), [key], 1);
        graceNotes.push(gnote);
    });
    const graceNoteGroup = f.GraceNoteGroup({ notes: graceNotes });
    graceNoteGroup.beamNotes.bind(graceNoteGroup);
    if (graceNotes.length > 1) {
        const embBeam = f.Beam({ notes: graceNotes });
        embBeam.render_options.beam_width = 1.5;
        embBeam.render_options.flat_beams = true;
        const factoryStave = f.getStave();
        if (factoryStave) {
            embBeam.render_options.flat_beam_offset = factoryStave.getY() + 8;
        }
        else {
            embBeam.render_options.flat_beam_offset = 0;
        }
        beams.push(embBeam);
    }
    return graceNoteGroup;
}
function createNoteWithEmbellishment(f, noteKey, duration, dot, gracenoteKeys, beams) {
    const note = createNoteForStemTest(duration, f.StaveNote.bind(f), [noteKey], -1);
    if (gracenoteKeys.length > 0) {
        note.addModifier(createEmbellishment(f, gracenoteKeys, beams), 0);
    }
    if (dot) {
        Dot.buildAndAttach([note], { all: true });
    }
    return note;
}
function beamNotes(f, notes, beams) {
    var _a;
    beams.push(f.Beam({ notes }));
    for (let i = 0; i < notes.length; i++) {
        (_a = notes[i].stem) === null || _a === void 0 ? void 0 : _a.setExtension(stemExtensions[notes[i].keys[0]] * 5);
    }
}
function scotlandTheBraveBar1(options) {
    const f = VexFlowTests.makeFactory(options, 700, 130);
    const stave = f.Stave({ x: 10, y: 10, width: 325 });
    const beams = [];
    const voice = f.Voice().setStrict(false);
    const notes = [
        createNoteWithEmbellishment(f, 'a/4', '4', false, ['g/5'], beams),
        createNoteWithEmbellishment(f, 'a/4', '8', false, ['g/4', 'd/5', 'g/4', 'e/5'], beams),
        createNoteWithEmbellishment(f, 'b/4', '8', false, [], beams),
        createNoteWithEmbellishment(f, 'c/5', '8', false, ['g/5', 'c/5', 'd/5'], beams),
        createNoteWithEmbellishment(f, 'a/4', '8', false, ['e/5'], beams),
        createNoteWithEmbellishment(f, 'c/5', '8', false, ['g/5', 'c/5', 'd/5'], beams),
        createNoteWithEmbellishment(f, 'e/5', '8', false, [], beams),
    ];
    beamNotes(f, [notes[1], notes[2]], beams);
    beamNotes(f, [notes[3], notes[4]], beams);
    beamNotes(f, [notes[5], notes[6]], beams);
    voice.addTickables(notes);
    f.Formatter().joinVoices([voice]).formatToStave([voice], stave);
    f.draw();
    options.assert.ok(true, 'GraceNoteStem');
}
function scotlandTheBraveBar2(options) {
    const f = VexFlowTests.makeFactory(options, 700, 130);
    const stave = f.Stave({ x: 10, y: 10, width: 325 });
    const beams = [];
    const voice = f.Voice().setStrict(false);
    const notes = [
        createNoteWithEmbellishment(f, 'a/5', '4', false, ['a/5', 'g/5'], beams),
        createNoteWithEmbellishment(f, 'a/5', '4', false, ['g/5'], beams),
        createNoteWithEmbellishment(f, 'a/5', '8', false, ['g/4', 'd/5', 'g/4'], beams),
        createNoteWithEmbellishment(f, 'e/5', '8', false, [], beams),
        createNoteWithEmbellishment(f, 'c/5', '8', false, ['g/5', 'c/5', 'd/5'], beams),
        createNoteWithEmbellishment(f, 'a/4', '8', false, ['e/5'], beams),
    ];
    beamNotes(f, [notes[2], notes[3]], beams);
    beamNotes(f, [notes[4], notes[5]], beams);
    voice.addTickables(notes);
    f.Formatter().joinVoices([voice]).formatToStave([voice], stave);
    f.draw();
    options.assert.ok(true, 'GraceNoteStem');
}
function highlandHarryBar2(options) {
    const f = VexFlowTests.makeFactory(options, 700, 130);
    const stave = f.Stave({ x: 10, y: 10, width: 325 });
    const beams = [];
    const voice = f.Voice().setStrict(false);
    const notes = [
        createNoteWithEmbellishment(f, 'g/5', '8', true, ['a/5', 'g/5'], beams),
        createNoteWithEmbellishment(f, 'e/5', '16', false, [], beams),
        createNoteWithEmbellishment(f, 'd/5', '8', true, ['g/4', 'd/5', 'c/5'], beams),
        createNoteWithEmbellishment(f, 'b/4', '16', false, [], beams),
        createNoteWithEmbellishment(f, 'g/4', '8', true, ['g/5',], beams),
        createNoteWithEmbellishment(f, 'g/4', '16', false, ['d/5'], beams),
        createNoteWithEmbellishment(f, 'g/4', '8', true, ['e/5'], beams),
        createNoteWithEmbellishment(f, 'g/5', '16', false, [], beams),
    ];
    beamNotes(f, [notes[0], notes[1]], beams);
    beamNotes(f, [notes[2], notes[3]], beams);
    beamNotes(f, [notes[4], notes[5]], beams);
    beamNotes(f, [notes[6], notes[7]], beams);
    voice.addTickables(notes);
    f.Formatter().joinVoices([voice]).formatToStave([voice], stave);
    f.draw();
    options.assert.ok(true, 'GraceNoteStem');
}
VexFlowTests.register(BPTuneTests);
export { BPTuneTests };

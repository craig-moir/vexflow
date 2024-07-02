// [VexFlow](https://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
// MIT License
//
// Barline Tests

import { TestOptions, VexFlowTests } from './vexflow_test_helpers';

import { Accidental } from '../src/accidental';
import { Annotation } from '../src/annotation';
import { Articulation } from '../src/articulation';
import { Beam } from '../src/beam';
import { Dot } from '../src/dot';
import { Factory } from '../src/factory';
import { Formatter } from '../src/formatter';
import { GraceNote, GraceNoteStruct } from '../src/gracenote';
import { StaveNote, StaveNoteStruct } from '../src/stavenote';
import { Barline, BarlineType } from '../src/stavebarline';
import { Vex } from '../src';

const BPTuneTests = {
  Start(): void {
    QUnit.module('BBPTune');
    const run = VexFlowTests.runTests;
    run('Scotland the Brave Bar 1', scotlandTheBraveBar1);
    run('Scotland the Brave Bar 2', scotlandTheBraveBar2);
  },
};

// A NoteBuilder is one of two functions: Factory.StaveNote | Factory.GraceNote.
type NoteBuilder = InstanceType<typeof Factory>['StaveNote'] | InstanceType<typeof Factory>['GraceNote'];

const createNoteForStemTest = (
  duration: string,
  noteBuilder: NoteBuilder,
  keys: string[],
  stem_direction: number,
  slash: boolean = false
): StaveNote => {
  const struct: GraceNoteStruct | StaveNoteStruct = { duration, slash };
  struct.stem_direction = stem_direction;
  struct.keys = keys;
  return noteBuilder(struct);
};

const stemExtensions: { [key: string]: number } = {
  "g/4": 0,
  "a/4": 1,
  "b/4": 2,
  "c/5": 3,
  "d/5": 4,
  "e/5": 5,
  "f/5": 6,
  "g/5": 7,
  "a/5": 8,
}

function createEmbellishment(f: Factory, keys: string[], beams: Beam[]) {
  const graceNotes: StaveNote[] = [];
  keys.map((key) => {
    const gnote = createNoteForStemTest("32", f.GraceNote.bind(f), [key], 1)
    graceNotes.push(gnote);
  });
  const graceNoteGroup = f.GraceNoteGroup({ notes: graceNotes });
  graceNoteGroup.beamNotes.bind(graceNoteGroup)
  if (graceNotes.length > 1) {
    const embBeam = f.Beam({ notes: graceNotes });
    embBeam.render_options.beam_width = 1.5
    embBeam.render_options.flat_beams = true
    const factoryStave = f.getStave()
    if (factoryStave) {
      embBeam.render_options.flat_beam_offset = factoryStave.getY() + 8
    }
    else {
      embBeam.render_options.flat_beam_offset = 0
    }
    beams.push(embBeam);
  }
  return graceNoteGroup;
}

function createNoteWithEmbellishment(f: Factory, noteKey: string, duration: string, dot: boolean, gracenoteKeys: string[], beams: Beam[]) {
  const note = createNoteForStemTest(duration, f.StaveNote.bind(f), [noteKey], -1)
  if (gracenoteKeys.length > 0) {
    note.addModifier(createEmbellishment(f, gracenoteKeys, beams), 0)
  }
  if (dot) {
    Dot.buildAndAttach([note], { all: true })
  }
  return note;
}

function beamNotes(f: Factory, notes: StaveNote[], beams: Beam[]) {
  beams.push(f.Beam({ notes }));
  for (let i = 0; i < notes.length; i++) {
    // console.log("hello", notes[i].keys[0], stemExtensions[notes[i].keys[0]], notes[i].stem)
    notes[i].stem?.setExtension(stemExtensions[notes[i].keys[0]] * 5)
    // eslint-disable-next-line
    // @ts-ignore
    // notes[i].stem.stem_extension = 50
    console.log("hello", notes[i].keys, stemExtensions[notes[i].keys[0]], notes[i].stem)
  }
}

function scotlandTheBraveBar1(options: TestOptions): void {
  const f = VexFlowTests.makeFactory(options, 700, 130);
  const stave = f.Stave({ x: 10, y: 10, width: 325 });

  const beams: Beam[] = [];
  const voice = f.Voice().setStrict(false);

  const notes: StaveNote[] = [
    createNoteWithEmbellishment(f, 'a/4', '4', false, ['g/5'], beams),
    createNoteWithEmbellishment(f, 'a/4', '8', false, ['g/4', 'd/5', 'g/4', 'e/5'], beams),
    createNoteWithEmbellishment(f, 'b/4', '8', false, [], beams),
    createNoteWithEmbellishment(f, 'c/5', '8', false, ['g/5', 'c/5', 'd/5'], beams),
    createNoteWithEmbellishment(f, 'a/4', '8', false, ['e/5'], beams),
    createNoteWithEmbellishment(f, 'c/5', '8', false, ['g/5', 'c/5', 'd/5'], beams),
    createNoteWithEmbellishment(f, 'e/5', '8', false, [], beams),
  ]

  beamNotes(f, [notes[1], notes[2]], beams)
  beamNotes(f, [notes[3], notes[4]], beams)
  beamNotes(f, [notes[5], notes[6]], beams)

  voice.addTickables(notes);

  f.Formatter().joinVoices([voice]).formatToStave([voice], stave);

  f.draw();

  options.assert.ok(true, 'GraceNoteStem');
}

function scotlandTheBraveBar2(options: TestOptions): void {
  const f = VexFlowTests.makeFactory(options, 700, 130);
  const stave = f.Stave({ x: 10, y: 10, width: 325 });

  const beams: Beam[] = [];
  const voice = f.Voice().setStrict(false);

  const notes: StaveNote[] = [
    createNoteWithEmbellishment(f, 'a/5', '4', false, ['a/5', 'g/5'], beams),
    createNoteWithEmbellishment(f, 'a/5', '8', false, ['g/5'], beams),
    createNoteWithEmbellishment(f, 'a/5', '8', false, ['g/4', 'd/5', 'g/4'], beams),
    createNoteWithEmbellishment(f, 'e/5', '8', false, [], beams),
    createNoteWithEmbellishment(f, 'c/5', '8', false, ['g/5', 'c/5', 'd/5'], beams),
    createNoteWithEmbellishment(f, 'a/4', '8', false, ['e/5'], beams),
  ]

  beams.push(f.Beam({ notes: [notes[2], notes[3]] }));
  beams.push(f.Beam({ notes: [notes[4], notes[5]] }));

  voice.addTickables(notes);

  f.Formatter().joinVoices([voice]).formatToStave([voice], stave);

  f.draw();

  options.assert.ok(true, 'GraceNoteStem');
}

VexFlowTests.register(BPTuneTests);
export { BPTuneTests };

/**
 * The Gonville font was created by Simon Tatham.
 * https://www.chiark.greenend.org.uk/~sgtatham/gonville/
 */
export declare const GonvilleMetrics: {
    name: string;
    smufl: boolean;
    stave: {
        padding: number;
        endPaddingMax: number;
        endPaddingMin: number;
        unalignedNotePadding: number;
    };
    accidental: {
        noteheadAccidentalPadding: number;
        leftPadding: number;
        accidentalSpacing: number;
    };
    chordSymbol: {
        global: {
            superscriptOffset: number;
            subscriptOffset: number;
            kerningOffset: number;
            lowerKerningText: string[];
            upperKerningText: string[];
            spacing: number;
            superSubRatio: number;
        };
        glyphs: {
            csymDiminished: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymHalfDiminished: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymAugmented: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensLeftTall: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensRightTall: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymBracketLeftTall: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymBracketRightTall: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensLeftVeryTall: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymParensRightVeryTall: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymDiagonalArrangementSlash: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymMinor: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            csymMajorSeventh: {
                leftSideBearing: number;
                yOffset: number;
                advanceWidth: number;
            };
            accidentalSharp: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
            accidentalFlat: {
                leftSideBearing: number;
                advanceWidth: number;
                yOffset: number;
            };
        };
    };
    clef_default: {
        width: number;
        annotations: {
            '8va': {
                point: number;
                treble: {
                    line: number;
                    shiftX: number;
                };
            };
            '8vb': {
                point: number;
                treble: {
                    line: number;
                    shiftX: number;
                };
                bass: {
                    line: number;
                    shiftX: number;
                };
            };
        };
    };
    clef_small: {
        width: number;
        annotations: {
            '8va': {
                point: number;
                treble: {
                    line: number;
                    shiftX: number;
                };
            };
            '8vb': {
                point: number;
                treble: {
                    line: number;
                    shiftX: number;
                };
                bass: {
                    line: number;
                    shiftX: number;
                };
            };
        };
    };
    ornament: {
        brassScoop: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassDoitMedium: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassFallLipShort: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassLiftMedium: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassFallRoughMedium: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassBend: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassMuteClosed: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassMuteOpen: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassFlip: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassJazzTurn: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
        brassSmear: {
            xOffset: number;
            yOffset: number;
            stemUpYOffset: number;
            reportedWidth: number;
        };
    };
    parenthesis: {
        default: {
            point: number;
            width: number;
        };
        gracenote: {
            point: number;
            width: number;
        };
    };
    pedalMarking: {
        up: {
            point: number;
        };
        down: {
            point: number;
        };
    };
    digits: {
        point: number;
        tupletPoint: number;
    };
    tremolo: {
        default: {
            point: number;
            spacing: number;
            offsetYStemUp: number;
            offsetYStemDown: number;
            offsetXStemUp: number;
            offsetXStemDown: number;
        };
        grace: {
            point: number;
            spacing: number;
            offsetYStemUp: number;
            offsetYStemDown: number;
            offsetXStemUp: number;
            offsetXStemDown: number;
        };
    };
    staveRepetition: {
        symbolText: {
            offsetX: number;
            offsetY: number;
            spacing: number;
        };
        coda: {
            offsetY: number;
        };
        segno: {
            offsetY: number;
        };
    };
    noteHead: {
        minPadding: number;
    };
    stem: {
        heightAdjustmentForFlag: number;
        noteHead: {
            noteheadTriangleUpHalf: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadTriangleUpBlack: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadTriangleUpWhole: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadXHalf: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadXBlack: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadXWhole: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadHalf: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadBlack: {
                offsetYBaseStemUp: number;
                offsetYBaseStemDown: number;
            };
            noteheadSquareWhite: {
                offsetYBaseStemDown: number;
                offsetYBaseStemUp: number;
            };
        };
    };
    stringNumber: {
        verticalPadding: number;
        stemPadding: number;
        leftPadding: number;
        rightPadding: number;
    };
    tuplet: {
        noteHeadOffset: number;
        stemOffset: number;
        bottomLine: number;
        topModifierOffset: number;
    };
    glyphs: {
        flag: {
            shiftX: number;
            flag8thDown: {
                shiftX: number;
            };
            flag16thDown: {
                shiftX: number;
            };
            flag32ndDown: {
                shiftX: number;
                shiftY: number;
            };
            flag64thDown: {
                shiftX: number;
                shiftY: number;
            };
            flag128thDown: {
                shiftX: number;
                shiftY: number;
            };
            flag32ndUp: {
                shiftY: number;
            };
            flag64thUp: {
                shiftY: number;
            };
            flag128thUp: {
                shiftY: number;
            };
        };
        clef_default: {
            point: number;
            '6stringTabClef': {
                point: number;
                shiftY: number;
            };
        };
        clef_small: {
            point: number;
        };
        clefNote_default: {
            point: number;
        };
        clefNote_small: {
            point: number;
        };
        textNote: {
            point: number;
            default: {};
            ornamentTrill: {
                shiftX: number;
                shiftY: number;
            };
        };
        chordSymbol: {
            csymDiminished: {
                scale: number;
            };
            csymHalfDiminished: {
                scale: number;
            };
            csymAugmented: {
                scale: number;
            };
            csymParensLeftTall: {
                scale: number;
            };
            csymParensRightTall: {
                scale: number;
            };
            csymBracketLeftTall: {
                scale: number;
            };
            csymBracketRightTall: {
                scale: number;
            };
            csymParensLeftVeryTall: {
                scale: number;
            };
            csymParensRightVeryTall: {
                scale: number;
            };
            csymDiagonalArrangementSlash: {
                scale: number;
            };
            csymMinor: {
                scale: number;
            };
            csymMajorSeventh: {
                scale: number;
            };
            accidentalSharp: {
                scale: number;
            };
            accidentalFlat: {
                scale: number;
            };
        };
        ornament: {
            brassScoop: {
                scale: number;
            };
            brassDoitMedium: {
                scale: number;
            };
            brassFallLipShort: {
                scale: number;
            };
            brassLiftMedium: {
                scale: number;
            };
            brassFallRoughMedium: {
                scale: number;
            };
            brassBend: {
                scale: number;
            };
            brassMuteClosed: {
                scale: number;
            };
            brassMuteOpen: {
                scale: number;
            };
            brassFlip: {
                scale: number;
            };
            brassJazzTurn: {
                scale: number;
            };
            brassSmear: {
                scale: number;
            };
        };
        stroke_straight: {
            arrowheadBlackDown: {
                shiftX: number;
            };
            arrowheadBlackUp: {
                shiftX: number;
            };
        };
        stroke_wiggly: {
            arrowheadBlackDown: {
                shiftX: number;
                shiftY: number;
            };
            arrowheadBlackUp: {
                shiftX: number;
                shiftY: number;
            };
        };
        tremolo: {
            default: {
                shiftY: number;
            };
            grace: {
                shiftY: number;
            };
        };
    };
};

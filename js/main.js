import { enumDirection, Vector } from "shapez/core/vector";
import { ItemAcceptorComponent } from "shapez/game/components/item_acceptor";
import { ItemEjectorComponent } from "shapez/game/components/item_ejector";
import { ItemProcessorComponent } from "shapez/game/components/item_processor";
import { defaultBuildingVariant } from "shapez/game/meta_building";
import { Mod } from "shapez/mods/mod";
import { ModMetaBuilding } from "shapez/mods/mod_meta_building";

class ModImpl extends Mod {
    init() {
        this.modInterface.registerNewBuilding({
            metaClass: ModBuilding,
            buildingIconBase64: RESOURCES["component"],
        });
        this.modInterface.addNewBuildingToToolbar({
            toolbar: "regular",
            location: "secondary",
            metaClass: ModBuilding,
        });
    }
}

class ModBuilding extends ModMetaBuilding {
    constructor() {
        super("modBuilding");
    }

    static getAllVariantCombinations() {
        return [
            {
                variant: defaultBuildingVariant,
                name: "Demo",
                description: "",
                regularImageBase64: RESOURCES["component"],
                blueprintImageBase64: RESOURCES["component"],
                tutorialImageBase64: RESOURCES["component"],
            },
        ];
    }

    getIsUnlocked(root) {
        return true;
    }

    setupEntityComponents(entity, root) {
        entity.addComponent(new ItemProcessorComponent({}));
        entity.addComponent(new ItemAcceptorComponent({
            slots: [
                {
                    pos: new Vector(0, 0),
                    direction: enumDirection.bottom,
                    filter: "shape",
                },
                {
                    pos: new Vector(0, 0),
                    direction: enumDirection.right,
                    filter: "shape",
                },
                {
                    pos: new Vector(0, 0),
                    direction: enumDirection.left,
                    filter: "shape",
                },
            ],
        }));
        entity.addComponent(new ItemEjectorComponent({
            slots: [
                {
                    pos: new Vector(0, 0),
                    direction: enumDirection.top,
                },
            ],
        }));
    }
}

const RESOURCES = {
    "component": `data:image/png;base64,
    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`
};

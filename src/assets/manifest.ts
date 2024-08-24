import { AssetsManifest } from "pixi.js";

export const manifest:AssetsManifest = {
    bundles: [
        {
            name : "game",
            assets:
            {
                "carPng" : "./car.png",
                "roadPng" : "./road.png",
            }
        }
    ]
}
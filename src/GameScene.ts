import { Container, Sprite, Texture, TilingSprite } from "pixi.js";
import { IScene, Manager } from "./Manager";

export class GameScene extends Container implements IScene {
    private road: TilingSprite;
    private roadVelocity: number;

    private vehicle: Sprite;

    constructor() {
        super();

        this.road = new TilingSprite(Texture.from("roadPng"), Manager.height, Manager.width)
        this.road.anchor.set(0.5);
        this.road.x = Manager.width / 2;
        this.road.y = Manager.height / 4;
        this.addChild(this.road);
        
        this.vehicle = Sprite.from("carPng");
        this.vehicle.anchor.set(0);
        this.vehicle.x = Manager.width / 2;
        this.vehicle.y = Manager.height / 2;
        this.addChild(this.vehicle);
        console.log(Manager.height + ": H| W: " + Manager.width)
        console.log(this.vehicle.height + ": H| W: " + this.vehicle.width)

        this.roadVelocity = 5;

        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    this.vehicle.y = Math.max(this.vehicle.height / 2, this.vehicle.y - 10); // Move vehicle up
                    break;
                case 'ArrowDown':
                    this.vehicle.y = Math.min(Manager.height - this.vehicle.height / 2, this.vehicle.y + 10); // Move vehicle down
                    break;
                case 'ArrowLeft':
                    this.vehicle.x = Math.max(this.vehicle.width / 2, this.vehicle.x - 10); // Move vehicle left
                    break;
                case 'ArrowRight':
                    this.vehicle.x = Math.min(Manager.width - this.vehicle.width / 2, this.vehicle.x + 10); // Move vehicle right
                    break;
            }
        });
    }

    public update(framesPassed: number): void {
        this.road.tilePosition.y += this.roadVelocity * framesPassed;
    }
}
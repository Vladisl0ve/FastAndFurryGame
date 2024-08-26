import { Container, Sprite, Texture, TilingSprite } from "pixi.js";
import { IScene, Manager } from "./Manager";

export class GameScene extends Container implements IScene {
    private road: TilingSprite;
    private roadVelocity: number;

    private vehicle: Sprite;

    constructor() {
        super();

        this.road = new TilingSprite(Texture.from("roadPng"), 1170, 2532)

        this.road.scale.set(0.3678)

        this.addChild(this.road);
        console.log(this.road)
        
        this.vehicle = Sprite.from("carPng");
        this.vehicle.anchor.set(0.5);
        this.vehicle.scale.set(0.5);
        this.vehicle.x = Manager.width / 2;
        this.vehicle.y = Manager.height;
        this.road.addChild(this.vehicle);
        console.log(Manager.height + ": H| W: " + Manager.width)
        console.log(this.vehicle.parent.height + ": H| W: " + this.vehicle.parent.width)
        console.log(this.vehicle.height + ": H| W: " + this.vehicle.width)
        console.log(this.road);
        console.log(this.vehicle.parent);

        console.log()

        this.roadVelocity = 5;

        window.addEventListener('keydown', (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    this.vehicle.y = Math.max(this.vehicle.height / 1.5, this.vehicle.y - 30); // Move vehicle up
                    console.log(this.vehicle.x + " :x; y: " + this.vehicle.y);
                    break;
                case 'ArrowDown':
                    this.vehicle.y = Math.min(this.vehicle.parent.height - this.vehicle.height / 1.5, this.vehicle.y + 30); // Move vehicle down
                    console.log(this.vehicle.x + " :x; y: " + this.vehicle.y);
                    break;
                case 'ArrowLeft':
                    this.vehicle.x = Math.max(this.vehicle.width / 1.5, this.vehicle.x - 30); // Move vehicle left
                    console.log(this.vehicle.x + " :x; y: " + this.vehicle.y);
                    break;
                case 'ArrowRight':
                    this.vehicle.x = Math.min(this.vehicle.parent.width - this.vehicle.width / 1.5, this.vehicle.x + 30); // Move vehicle right
                    console.log(this.vehicle.x + " :x; y: " + this.vehicle.y);
                    break;
            }
        });
    }

    public update(framesPassed: number): void {
        this.road.tilePosition.y += this.roadVelocity * framesPassed;
    }
}
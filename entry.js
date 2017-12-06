import { circles, walls, innerWalls, bumpers, paddles, thorns } from './app/assets/javascripts/board';
import { createBall } from './app/assets/javascripts/ball';
import Matter from 'Matter-js';

  let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

  let engine;
  let world;

  function setup() {

    engine = Engine.create();

    let render = Render.create({
        canvas: document.getElementById('pinball-canvas'),
        engine: engine,
        options: {
          width: 550,
          height: 650,
          wireframes: false
        }
    });
    world = engine.world;
    const board = [circles(), walls(), innerWalls(), bumpers(), paddles(), thorns()];
    World.add(engine.world, board.reduce((prev, curr) => {
      return prev.concat(curr);
    }));

    World.add(engine.world, [createBall()]);

    Engine.run(engine);
    Render.run(render);
  }

  document.addEventListener("DOMContentLoaded", function(){

    setup();

  });

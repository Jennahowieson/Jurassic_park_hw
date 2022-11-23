const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
  let park;
  let dinosaur
  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'omnivore', 20);
    dinosaur3 = new Dinosaur('velociraptor', 'omnivore', 30);
  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10)
  });
  
  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [])
  });

  it('should be able to addDinosaur a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur1)
    const actual = park.dinosaurs.length;
    assert.deepEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const biggestAttraction = park.findBiggestAttraction()
    const actual = biggestAttraction;
    assert.deepStrictEqual(actual, dinosaur1)
  });


  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findBySpecies('velociraptor');
    const expected = [dinosaur3];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    const actual = park.calculateTotalVisitorsPerDay()
    assert.strictEqual(actual, 150);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    const actual = park.calculateTotalVisitorsPerYear();
    assert.strictEqual(actual, 54750);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    const actual = park.calculateTotalYearlyRevenue();
    assert.strictEqual(actual, 547500);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeBySpecies('velociraptor');
    const actual = park.dinosaurs;
    const expected = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate number of dinosaurs for each diet type', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.numberOfDinosaursByDiet();
    const expected = { carnivore: 1, omnivore: 2 };
    assert.deepStrictEqual(actual, expected);
  });

});

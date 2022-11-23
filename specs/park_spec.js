const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {
  let park;
  let dinosaur
  beforeEach(function () {
    park = new Park('Jurassic Park', 10);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velocoraptor', 'omnivore', 30);
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

  it('should be able to add a dinosaur to its collection', function() {
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

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const biggestAttraction = park.findBiggestAttraction()
    const actual = biggestAttraction ;
    assert.deepEqual(actual, 't-rex')
  });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

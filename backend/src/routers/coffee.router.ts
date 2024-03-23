import { sample_coffee, sample_tags } from "../data";

import { CoffeeModel } from "../models/coffee.model";
import { Router } from "express";
import asyncHandler from 'express-async-handler';

const router = Router();

router.get(
    '/seed',
    asyncHandler(async (req, res) => {
      const coffeeCount = await CoffeeModel.countDocuments();
      if (coffeeCount > 0) {
        res.send('Seed is already done!');
        return;
      }
  
      await CoffeeModel.create(sample_coffee);
      res.send('Seed Is Done!');
    })
  );

router.get("/", asyncHandler(
  async (req, res) => {
    const coffee = await CoffeeModel.find();
    res.send(coffee);
  })
);

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
  const searchRegex = new RegExp(req.params.searchTerm, 'i');
  const coffee = await CoffeeModel.find({ name: { $regex: searchRegex } });
  res.send(coffee);
  })
);

router.get('/tags', asyncHandler(
  async (req, res) => {
    const tags = await CoffeeModel.aggregate([
      {
        $unwind: '$tags',
      },
      {
        $group: {
          _id: '$tags',
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: '$_id',
          count: '$count',
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: 'All',
      count: await CoffeeModel.countDocuments(),
    };

    tags.unshift(all);
    res.send(tags);
  })
);

router.get("/tag/:tagname", asyncHandler(
  async (req, res) => {
    const coffee = await CoffeeModel.find({tags: req.params.tagname});
    res.send(coffee);    
  })
);

router.get("/:coffeeId", asyncHandler(
  async(req, res) => {
    const coffee = await CoffeeModel.findById(req.params.coffeeId) ;
    res.send(coffee); 
}))

export default router;

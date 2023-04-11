import { Injectable,HttpException } from '@nestjs/common';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Depot, DepotDocument } from './entities/depot.entity';
import { Model } from 'mongoose';

@Injectable()
export class DepotService {
  constructor(
    @InjectModel(Depot.name) private DepotModel: Model<DepotDocument>,
  ) {}

  async create(createDepotDto: CreateDepotDto): Promise<Depot> {
    try {
      const createdDepot = new this.DepotModel(createDepotDto);
      return await createdDepot.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<Depot[]> {
    try {
      return await this.DepotModel.find();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<Depot> {
    try {
      return await this.DepotModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateDepotDto: UpdateDepotDto): Promise<Depot> {
    try {
      return await this.DepotModel.findByIdAndUpdate(id, updateDepotDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<Depot> {
    try {
      return await this.DepotModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}

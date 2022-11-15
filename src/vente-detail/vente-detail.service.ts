import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVenteDetailDto } from './dto/create-vente-detail.dto';
import { UpdateVenteDetailDto } from './dto/update-vente-detail.dto';
import { VenteDetail, VenteDetailDocument } from './entities/vente-detail.entity';

@Injectable()
export class VenteDetailService {
  constructor(
    @InjectModel(VenteDetail.name) private VenteDetailModel: Model<VenteDetailDocument>,
  ) {}

  async create(createVenteDetailDto: CreateVenteDetailDto): Promise<VenteDetail> {
    try {
      const createdVenteDetail = new this.VenteDetailModel(createVenteDetailDto);
      return await createdVenteDetail.save();
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findAll(): Promise<VenteDetail[]> {
    try {
      return await this.VenteDetailModel.find().sort({date: 'desc'});
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(id: string): Promise<VenteDetail> {
    try {
      return await this.VenteDetailModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async update(id: string, updateVenteDetailDto: UpdateVenteDetailDto): Promise<VenteDetail> {
    try {
      return await this.VenteDetailModel.findByIdAndUpdate(id, updateVenteDetailDto);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async remove(id: string): Promise<VenteDetail> {
    try {
      return await this.VenteDetailModel.findByIdAndDelete(id);
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }
}

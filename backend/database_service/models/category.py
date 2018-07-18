from sqlalchemy import Column, Integer, String
from sqlalchemy_dao import Model
from marshmallow_sqlalchemy import ModelSchema


class Category(Model):
    id = Column(Integer, primary_key=True)
    name = Column(String)


class CategorySchema(ModelSchema):
    class Meta:
        model = Category
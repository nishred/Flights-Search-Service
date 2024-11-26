class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (err) {
      console.log("Error in repository");
      throw err;
    }
  }

  async get(id) {
    try {
      const result = await this.model.findByPk(id);

      return result;
    } catch (err) {
      console.log("Error in repository");
      throw err;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();

      return result;
    } catch (err) {
      console.log("Error in repository");
      throw err;
    }
  }

  async destroy(id) {
    try {
      await this.model.destroy({
        where: { id },
      });

      return true;
    } catch (err) {
      console.log("Error in repository");
      throw err;
    }
  }

  async update(id, data) {
    try {
      const result = await this.model.update(data, { where: { id } });

      return result;
    } catch (err) {
      console.log("Error in repository");
      throw err;
    }
  }
}


module.exports = CrudRepository

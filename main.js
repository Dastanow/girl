class Garage {
    constructor(capacity) {
      this.vehicles = []; // Пустой массив для хранения автомобилей
      this.capacity = capacity; // Количество автомобилей, которое может поместиться в гараж
    }
  
    // Метод для добавления автомобиля в гараж
    addVehicle(vehicle) {
      if (this.vehicles.length < this.capacity) {
        this.vehicles.push(vehicle);
        console.log(`Автомобиль ${vehicle} успешно добавлен в гараж.`);
      } else {
        console.log('Гараж заполнен. Невозможно добавить еще автомобиль.');
      }
    }
  
    // Метод для удаления автомобиля из гаража
    removeVehicle(vehicle) {
      const index = this.vehicles.indexOf(vehicle);
      if (index !== -1) {
        this.vehicles.splice(index, 1);
        console.log(`Автомобиль ${vehicle} успешно удален из гаража.`);
      } else {
        console.log(`Автомобиль ${vehicle} не найден в гараже.`);
      }
    }
  
    // Метод для получения количества автомобилей в гараже
    getVehicleCount() {
      return this.vehicles.length;
    }
  }
  
  // Пример использования
  const myGarage = new Garage(3); // Создаем гараж с вместимостью 3 автомобиля
  console.log(`Вместимость гаража: ${myGarage.capacity}`);
  
  myGarage.addVehicle('Audi'); // Добавляем автомобиль в гараж
  myGarage.addVehicle('BMW');
  myGarage.addVehicle('Mercedes');
  myGarage.addVehicle('Tesla'); // Не удастся добавить, так как гараж заполнен
  
  console.log(`Количество автомобилей в гараже: ${myGarage.getVehicleCount()}`);
  
  myGarage.removeVehicle('BMW'); // Удаляем автомобиль из гаража
  console.log(`Количество автомобилей в гараже: ${myGarage.getVehicleCount()}`);
  
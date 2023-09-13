//Generics

interface Person{
    id: number;
    name: string;
}

interface Employee extends Person{
    role: String
}

interface Product{
    id: number;
    name: string;
    price: number;
}

interface Data<T>{
    addItem(newItem: T): void; //Metodo abstracto. La clase que implementeesta interface, debe implementar este método necesariamente
}

class DateCollection<T extends { id: number, name: string }> implements Data<T>{
    private items: T[] = [];

    addItem(newItem: T): void{
        this.items.push(newItem);
    }

    getItems(): void{
        console.log('List of items', JSON.stringify(this.items));
    }

    getNames(): string[]{
        return this.items.map((item) => item.name);
    }

    getItemById(id: number): Person | undefined{
        return this.items.find((item : T) => item.id === id);
    }
}

const productCollection = new DateCollection<Product>();
const newData = {
    id: 1,
    name: "Beer",
    price: 333
}

const newData2 = {
    id: 2,
    name: "Chips",
    price: 200
}

productCollection.addItem(newData)
productCollection.addItem(newData2)
productCollection.getItems();

const employeeCollection = new DateCollection<Employee>();
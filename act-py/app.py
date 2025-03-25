

def agregate_people(peoples):
    name = str(input('Ingrese el nombre: '))
    lastname = str(input('Ingrese el apellido: '))
    dni = str(input('Ingrese su dni: '))
    
    phones = []
    
    while True :
        phone = str(input("Ingrese el numero de telefono: "))
        phones.append(phone)
        if phone == "":
            print('Ingrese un numero de telefono')
        continues = str(input("Desea agregar otro numero de telefono, ingrese si/no: "))
        if continues.upper() == 'NO':
            break
    
    peoples.append([name, lastname, dni, phones])

def show_people(peoples):
    print('Personas registradas: ')
    for idx, people in enumerate(peoples, 1):
        print(f'{idx} Persona')
        print(f'Nombre: {people[0]}')
        print(f'Apellido: {people[1]}')
        print(f'DNI: {people[2]}')
        print("Phones: ")
        for phone in people[3]:
            print(phone)

def app():
    peoples = []
    
    while True:
        agregate_people(peoples)
        continues = input('Desea agregar otro usuario?. Ingrese si/no: ')
        if continues.upper() == 'NO':
            show_people(peoples)
            break


if __name__ == "__main__":
    app()
    
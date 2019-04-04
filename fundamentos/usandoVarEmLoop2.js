const func = []

for (var i = 0; i < 10; i++) {
    func.push(function() {
        console.log('Valor com var: ', i)
    })
}

func[2]()
func[7]()

const func2 = []

for (let n = 0; n < 10; n++) {
    func2.push(function() {
        console.log('Valor com let: ', n)
    })
}

func2[2]()
func2[8]()
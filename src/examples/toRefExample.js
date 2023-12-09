// Равносильно ref(1)
toRef(1)
// создает readonly ref, который вызывает getter при доступе к .value
toRef(() => props.foo)
// Возвращает существующий refs как есть
toRef(existingRef)
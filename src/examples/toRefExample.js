// Равносильно ref(1)
toRef(1)
// создает readonly ref, который вызывает getter при доступе к .value
toRef(() => props.foo)
// Возвращает существующий refs как есть
toRef(existingRef)

toValue(1) //       --> 1
toValue(ref(1)) //  --> 1
toValue(() => 1) // --> 1

// До: выделение ненужных промежуточных ссылок
useFeature(computed(() => props.foo))
useFeature(toRef(props, 'foo'))

// После: более эффективно и лаконично
useFeature(() => props.foo)
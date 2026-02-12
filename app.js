const tg = window.Telegram.WebApp;
tg.expand();

// ===== Захардкоженные задачи =====

const tasks = 
[
    {
      "id": 1,
      "question": "Что вернёт метод?",
      "code": "int Sum(int a, int b) { return a + b; }",
      "options": [
        "Ничего (void)",
        "Сумму a и b",
        "Всегда 0"
      ],
      "correctIndex": 1,
      "explanations": [
        "void — метод без возврата; здесь указан int",
        "return a + b возвращает сумму аргументов",
        "метод не возвращает константу 0"
      ]
    },
    {
      "id": 2,
      "question": "Какой SQL запрос корректный?",
      "code": "Получить пользователя с Id = 5",
      "options": [
        "SELECT Users WHERE Id == 5",
        "SELECT * FROM Users",
        "SELECT * FROM Users WHERE Id = 5"
      ],
      "correctIndex": 2,
      "explanations": [
        "нет FROM, в SQL используется = а не ==",
        "нет условия WHERE — вернёт всех пользователей",
        "корректный синтаксис: SELECT, FROM, WHERE с ="
      ]
    },
    {
      "id": 3,
      "question": "Что корректно вернуть из Controller?",
      "code": "public IActionResult Index() { ... }",
      "options": [
        "return \"Hello\";",
        "return View();",
        "return int;"
      ],
      "correctIndex": 1,
      "explanations": [
        "string нельзя привести к IActionResult напрямую",
        "View() возвращает представление — стандартный способ",
        "синтаксис неверен, int — тип, не значение"
      ]
    },
    {
      "id": 4,
      "question": "Как правильно объявить метод с параметром по умолчанию?",
      "code": "C#",
      "options": [
        "void Print(int x = 0) { }",
        "void Print(int x := 0) { }",
        "void Print(optional int x = 0) { }"
      ],
      "correctIndex": 0,
      "explanations": ["в C# используется = для значения по умолчанию", ":= не используется в C#", "ключевого слова optional нет в C#"]
    },
    {
      "id": 5,
      "question": "Какой запрос добавит новую запись в таблицу Users?",
      "code": "Имя: John, Email: john@mail.ru",
      "options": [
        "ADD INTO Users (Name, Email) VALUES ('John', 'john@mail.ru')",
        "INSERT INTO Users (Name, Email) VALUES ('John', 'john@mail.ru')",
        "CREATE Users SET Name='John', Email='john@mail.ru'"
      ],
      "correctIndex": 1,
      "explanations": ["в SQL используется INSERT, не ADD", "корректный синтаксис INSERT INTO", "CREATE создаёт объекты, не вставляет строки"]
    },
    {
      "id": 6,
      "question": "Как в HTML-форме добавить скрытое поле (hidden)?",
      "code": "Передать Id сущности без отображения",
      "options": [
        "<input type=\"hidden\" name=\"id\" value=\"@Model.Id\">",
        "<input type=\"secret\" name=\"id\">",
        "<hidden name=\"id\" value=\"@Model.Id\">"
      ],
      "correctIndex": 0,
      "explanations": ["type=\"hidden\" — стандартный способ скрытого поля", "type=\"secret\" не существует в HTML", "тега <hidden> нет в HTML"]
    },
    {
      "id": 7,
      "question": "Как объявить метод, который возвращает целое число?",
      "code": "C#",
      "options": [
        "int GetId() { return 1; }",
        "void GetId() { return 1; }",
        "return int GetId() { 1 }"
      ],
      "correctIndex": 0,
      "explanations": ["int — тип возврата, return 1 возвращает число", "void не возвращает значение", "неверный синтаксис объявления метода"]
    },
    {
      "id": 8,
      "question": "Как удалить все строки из таблицы Orders?",
      "code": "SQL",
      "options": [
        "DELETE FROM Orders",
        "REMOVE FROM Orders",
        "TRUNCATE Orders"
      ],
      "correctIndex": 0,
      "explanations": ["DELETE FROM — корректный синтаксис удаления строк", "REMOVE не используется в SQL", "TRUNCATE — отдельная команда, синтаксис другой"]
    },
    {
      "id": 9,
      "question": "Как из Controller передать данные во View?",
      "code": "Передать список продуктов",
      "options": [
        "return products",
        "return View(products);",
        "Response.Write(products); return View();"
      ],
      "correctIndex": 1,
      "explanations": ["proucts просто возвращается, а не передаётся в View", "модель передаётся вторым аргументом View()", "Response.Write не передаёт модель во View"]
    },
    {
      "id": 10,
      "question": "Что выведет: for (int i = 0; i < 3; i++) Console.Write(i);",
      "code": "C#",
      "options": [
        "123",
        "0123",
        "012"
      ],
      "correctIndex": 2,
      "explanations": ["i идёт 0,1,2 — не 1,2,3", "цикл при i=3 выходит, 3 не выводится", "i=0,1,2 — вывод 012"]
    },
    {
      "id": 11,
      "question": "Как обновить поле Price в таблице Products для Id = 3?",
      "code": "Новая цена 99.99",
      "options": [
        "UPDATE Products SET Price = 99.99 WHERE Id = 3",
        "UPDATE Products SET Price = 99.99",
        "SET Products.Price = 99.99 WHERE Id = 3"
      ],
      "correctIndex": 0,
      "explanations": ["корректный UPDATE с WHERE для одной строки", "без WHERE обновит все строки", "неверный синтаксис SET"]
    },
    {
      "id": 12,
      "question": "Как в Razor вывести переменную из модели?",
      "code": "Модель: Product с полем Name",
      "options": [
        "<%= Model.Name %>",
        "@Model.Name",
        "${Model.Name}"
      ],
      "correctIndex": 1,
      "explanations": ["<%= %> — синтаксис ASP.NET WebForms", "@ — префикс Razor для вывода", "${} — синтаксис JS/шаблонов"]
    },
    {
      "id": 13,
      "question": "Что выведет: \n        int x = 5; \n        if (x > 3) \n        { \n            Console.Write(\"A\");\n        }else\n        {\n            Console.Write(\"B\");\n        } ",
      "code": "C#",
      "options": [
        "A",
        "B",
        "AB"
      ],
      "correctIndex": 0,
      "explanations": ["x=5 > 3, выполняется ветка if, выводится A", "ветка else при x>3 не выполняется", "выполняется только одна ветка"]
    },
    {
      "id": 14,
      "question": "Как выбрать только колонки Name и Email из Users?",
      "code": "SELECT",
      "options": [
        "SELECT (Name, Email) FROM Users",
        "SELECT COLUMNS Name, Email FROM Users",
        "SELECT Name, Email FROM Users"
      ],
      "correctIndex": 2,
      "explanations": ["скобки не используются для списка колонок", "ключевого слова COLUMNS нет", "колонки перечисляются через запятую"]
    },
    {
      "id": 15,
      "question": "Как указать тип модели во View?",
      "code": "Razor, модель — список Product",
      "options": [
        "@Model List<Product>",
        "@model List<Product>",
        "model List<Product>;"
      ],
      "correctIndex": 1,
      "explanations": ["@Model — доступ к данным, не объявление типа", "@model с маленькой m — директива типа", "model без @ не распознаётся Razor"]
    },
    {
      "id": 16,
      "question": "Как перебрать все элементы списка в C#?",
      "code": "var list = new List<int> { 1, 2, 3 };",
      "options": [
        "for (list) { }",
        "foreach (var x in list) { }",
        "list.each(x => { });"
      ],
      "correctIndex": 1,
      "explanations": ["for требует инициализатор, условие, итератор", "foreach — стандартный способ перебора коллекции", "метода each нет у List в C#"]
    },
    {
      "id": 17,
      "question": "Что делает запрос: SELECT * FROM Users WHERE Id = 1?",
      "code": "SQL",
      "options": [
        "Удаляет пользователя с Id = 1",
        "Возвращает одну строку пользователя с Id = 1",
        "Обновляет Id на 1 у первой строки"
      ],
      "correctIndex": 1,
      "explanations": ["SELECT только читает данные", "SELECT возвращает строки по условию WHERE", "SELECT не изменяет данные"]
    },
    {
      "id": 18,
      "question": "Как вернуть другую View из Controller?",
      "code": "Вернуть представление \"Contact\"",
      "options": [
        "return Contact();",
        "return Redirect(\"Contact\");",
        "return View(\"Contact\");"
      ],
      "correctIndex": 2,
      "explanations": ["Contact() не стандартный метод Controller", "Redirect выполняет редирект, не возврат View", "View(\"имя\") возвращает указанное представление"]
    },
    {
      "id": 19,
      "question": "Что вернёт: var a = new[] { 1, 2, 3 }.Where(x => x > 1).Count();",
      "code": "LINQ",
      "options": [
        "3",
        "2",
        "1"
      ],
      "correctIndex": 1,
      "explanations": ["Where(x>1) оставляет 2 и 3 — не все три", "элементы 2 и 3 проходят фильтр, Count=2", "проходит 2 элемента, не 1"]
    },
    {
      "id": 20,
      "question": "Как вставить несколько строк одним запросом?",
      "code": "INSERT",
      "options": [
        "INSERT INTO Users (Name) VALUES ('A'); INSERT INTO Users (Name) VALUES ('B');",
        "INSERT INTO Users (Name) VALUES ('A'), ('B'), ('C')",
        "INSERT INTO Users VALUES ('A', 'B', 'C')"
      ],
      "correctIndex": 1,
      "explanations": ["два отдельных запроса, не один", "несколько кортежей в одном VALUES", "VALUES ожидает кортежи, не список значений"]
    },
    {
      "id": 21,
      "question": "Как вернуть успешный ответ (200 OK) из API-метода контроллера?",
      "code": "ASP.NET Core",
      "options": [
        "return Ok(data);",
        "return NotFound();",
        "return BadRequest();"
      ],
      "correctIndex": 0,
      "explanations": [
        "Ok(...) возвращает 200 OK с данными",
        "NotFound() возвращает 404, когда ресурс не найден",
        "BadRequest() возвращает 400 при ошибке в данных запроса"
      ]
    },
    {
      "id": 22,
      "question": "Как выбрать первый элемент последовательности в LINQ?",
      "code": "var nums = new[] { 10, 20, 30 };",
      "options": [
        "nums[1]",
        "nums.First()",
        "nums.Take(0)"
      ],
      "correctIndex": 1,
      "explanations": ["[1] — второй элемент (индекс с 0)", "First() — LINQ-метод для первого элемента", "Take(0) вернёт пустую последовательность"]
    },
    {
      "id": 23,
      "question": "Как удалить только строки, где Status = 'Done'?",
      "code": "DELETE с условием",
      "options": [
        "DELETE FROM Tasks IF Status = 'Done'",
        "DELETE FROM Tasks WHERE Status = 'Done'",
        "DELETE Tasks WHERE Status = 'Done'"
      ],
      "correctIndex": 1,
      "explanations": ["в SQL используется WHERE, не IF", "WHERE задаёт условие для удаляемых строк", "нужно FROM между DELETE и таблицей"]
    },
    {
      "id": 24,
      "question": "Как в Razor выполнить C# код и вывести результат?",
      "code": "Вычислить 2 + 2",
      "options": [
        "<% 2 + 2 %>",
        "{{ 2 + 2 }}",
        "@(2 + 2)"
      ],
      "correctIndex": 2,
      "explanations": ["<% %> — синтаксис ASP.NET WebForms", "{{ }} — синтаксис Angular/Handlebars", "@() — Razor для выражения с выводом"]
    },
    {
      "id": 25,
      "question": "Что выведет: foreach (var c in \"ab\") Console.Write(c);",
      "code": "C#",
      "options": [
        "a b",
        "0 1",
        "ab"
      ],
      "correctIndex": 2,
      "explanations": ["foreach по строке даёт символы без пробелов", "c — символ, не индекс", "символы a и b выводятся подряд"]
    },
    {
      "id": 26,
      "question": "Как обновить несколько полей одной записью?",
      "code": "Users: Name и Email для Id = 5",
      "options": [
        "UPDATE Users (Name, Email) WHERE Id = 5",
        "UPDATE Users SET Name = 'X' AND Email = 'y@mail.ru' WHERE Id = 5",
        "UPDATE Users SET Name = 'X', Email = 'y@mail.ru' WHERE Id = 5"
      ],
      "correctIndex": 2,
      "explanations": ["поля задаются через SET, не в скобках", "AND для логики, поля разделяются запятой", "SET поле=значение, поле=значение через запятую"]
    },
    {
      "id": 27,
      "question": "Как в Razor написать блок C# кода без вывода в HTML?",
      "code": "Выполнить несколько операций",
      "options": [
        "@( var x = 1; )",
        "@{ var x = 1; var y = 2; }",
        "<% var x = 1; %>"
      ],
      "correctIndex": 1,
      "explanations": ["@() для одного выражения с выводом", "@{} — блок кода без вывода", "<% %> — WebForms, не Razor"]
    },
    {
      "id": 28,
      "question": "Можно ли передать именованный аргумент не по порядку?",
      "code": "Print(y: 2, x: 1);",
      "options": [
        "Нет, порядок всегда важен",
        "Да, порядок не важен для именованных",
        "Только если оба именованные"
      ],
      "correctIndex": 1,
      "explanations": ["с именованными аргументами порядок не важен", "именованные можно передавать в любом порядке", "достаточно указать имена параметров"]
    },
    {
      "id": 29,
      "question": "Как выбрать первые 10 записей?",
      "code": "T-SQL / SQL Server",
      "options": [
        "SELECT TOP 10 * FROM Users",
        "SELECT * FROM Users LIMIT 10",
        "SELECT FIRST 10 * FROM Users"
      ],
      "correctIndex": 0,
      "explanations": ["TOP — синтаксис SQL Server/T-SQL", "LIMIT — MySQL/PostgreSQL", "FIRST не используется в SQL Server"]
    },
    {
      "id": 30,
      "question": "Когда в Controller вернуть NotFound()?",
      "code": "ASP.NET Core",
      "options": [
        "Когда форма невалидна",
        "Когда произошла любая ошибка",
        "Когда запись не найдена"
      ],
      "correctIndex": 2,
      "explanations": [
        "невалидная форма — BadRequest",
        "общие ошибки — другие коды",
        "NotFound — 404, когда сущность не найдена"
      ]
    },
    {
      "id": 31,
      "question": "Что делает метод .Select() в LINQ?",
      "code": "var ids = items.Select(x => x.Id);",
      "options": [
        "Фильтрует элементы по условию",
        "Сортирует по полю Id",
        "Преобразует каждый элемент в новое значение (проекция)"
      ],
      "correctIndex": 2,
      "explanations": ["фильтрация — метод Where", "сортировка — OrderBy", "Select — проекция/преобразование"]
    },
    {
      "id": 32,
      "question": "В каком порядке выполняются: SELECT, FROM, WHERE?",
      "code": "Логический порядок",
      "options": [
        "SELECT → FROM → WHERE",
        "WHERE → FROM → SELECT",
        "FROM → WHERE → SELECT"
      ],
      "correctIndex": 2,
      "explanations": [
        "порядок написания не совпадает с порядком выполнения",
        "WHERE не может быть первым — нужна таблица",
        "сначала FROM (источник), затем WHERE (фильтр), затем SELECT (проекция)"
      ]
    },
    {
      "id": 33,
      "question": "Как в Razor проверить, что модель не null?",
      "code": "Показать блок только при наличии модели",
      "options": [
        "@Model.NotNull()",
        "@isset(Model)",
        "@if (Model != null) { ... }"
      ],
      "correctIndex": 2,
      "explanations": ["NotNull() не стандартный метод", "isset — PHP, не C#", "стандартная проверка через if"]
    },
    {
      "id": 34,
      "question": "Что выведет: int i = 0; while (i < 2) { Console.Write(i); i++; }",
      "code": "C#",
      "options": [
        "01",
        "012",
        "12"
      ],
      "correctIndex": 0,
      "explanations": ["i=0,1 выводятся; при i=2 цикл выходит", "2 не выводится — условие i<2 ложно", "начинаем с 0, не с 1"]
    },
    {
      "id": 35,
      "question": "Как выбрать уникальные значения колонки City из Users?",
      "code": "SELECT",
      "options": [
        "SELECT UNIQUE City FROM Users",
        "SELECT DISTINCT City FROM Users",
        "SELECT City FROM Users GROUP BY City"
      ],
      "correctIndex": 1,
      "explanations": ["в SQL используется DISTINCT", "DISTINCT убирает дубликаты", "GROUP BY тоже работает, но DISTINCT проще"]
    },
    {
      "id": 36,
      "question": "Когда в Controller вернуть BadRequest()?",
      "code": "ASP.NET Core",
      "options": [
        "Когда данные запроса невалидны",
        "Когда страница не найдена",
        "Когда произошла любая ошибка"
      ],
      "correctIndex": 0,
      "explanations": ["BadRequest — 400, невалидные данные", "не найдено — NotFound", "общие ошибки — другие коды"]
    },
    {
      "id": 37,
      "question": "Что вернёт: new[] { 1, 2, 3 }.Any(x => x > 2);",
      "code": "LINQ",
      "options": [
        "true",
        "false",
        "3"
      ],
      "correctIndex": 0,
      "explanations": ["3 > 2, есть элемент — Any возвращает true", "элемент 3 удовлетворяет условию", "Any возвращает bool, не элемент"]
    },
    {
      "id": 38,
      "question": "Как отсортировать выборку по полю Name по возрастанию?",
      "code": "SELECT * FROM Users",
      "options": [
        "SELECT * FROM Users ORDER BY Name",
        "SELECT * FROM Users SORT BY Name",
        "SELECT * FROM Users ORDER Name DESC"
      ],
      "correctIndex": 0,
      "explanations": ["ORDER BY по умолчанию — по возрастанию", "SORT BY не используется в SQL", "DESC — по убыванию"]
    },
    {
      "id": 39,
      "question": "Как в Razor вывести значение только если оно не пустое?",
      "code": "Поле Model.Description",
      "options": [
        "@if (!string.IsNullOrEmpty(Model.Description)) { @Model.Description }",
        "@Model.Description ?? \"\"",
        "@Model.Description.OrDefault()"
      ],
      "correctIndex": 0,
      "explanations": ["условный вывод при непустой строке", "?? выведет пустую строку, не скроет", "OrDefault не у строки"]
    },
    {
      "id": 40,
      "question": "Что выведет: var n = 4; Console.Write(n % 2 == 0 ? \"чёт\" : \"нечёт\");",
      "code": "C# тернарный оператор",
      "options": [
        "чёт",
        "нечёт",
        "4"
      ],
      "correctIndex": 0,
      "explanations": ["4 % 2 = 0, условие истинно — «чёт»", "нечёт при остатке 1", "тернарный возвращает строку"]
    },
    {
      "id": 41,
      "question": "Как в условии WHERE указать «значение в списке»?",
      "code": "Id равен 1, 2 или 3",
      "options": [
        "WHERE Id = (1, 2, 3)",
        "WHERE Id IN 1, 2, 3",
        "WHERE Id IN (1, 2, 3)"
      ],
      "correctIndex": 2,
      "explanations": ["= не для списка значений", "IN требует скобки вокруг списка", "IN (значения) — корректный синтаксис"]
    },
    {
      "id": 42,
      "question": "Как в Razor показать ошибку валидации для поля модели?",
      "code": "Поле Name",
      "options": [
        "<span asp-validation-for=\"Name\"></span>",
        "<span class=\"error\">@Model.Name.Error</span>",
        "@Validation.Message(\"Name\")"
      ],
      "correctIndex": 0,
      "explanations": [
        "asp-validation-for — Tag Helper для вывода ошибок валидации",
        "у модели нет свойства Error для сообщений",
        "Validation.Message не стандартный метод Razor"
      ]
    },
    {
      "id": 43,
      "question": "Что делает .Where(x => x.Active) в LINQ?",
      "code": "Фильтрация коллекции",
      "options": [
        "Оставляет только элементы, у которых Active == true",
        "Удаляет поле Active из элементов",
        "Сортирует по полю Active"
      ],
      "correctIndex": 0,
      "explanations": ["Where фильтрует по условию", "Where не меняет структуру элементов", "сортировка — OrderBy"]
    },
    {
      "id": 44,
      "question": "Как объединить две таблицы по ключу?",
      "code": "Users и Orders по UserId",
      "options": [
        "SELECT * FROM Users, Orders WHERE Users.Id = Orders.UserId",
        "SELECT * FROM Users u JOIN Orders o ON u.Id = o.UserId",
        "SELECT * FROM Users MERGE Orders ON UserId"
      ],
      "correctIndex": 1,
      "explanations": [
        "неявный JOIN работает, но явный JOIN ON предпочтительнее",
        "JOIN ... ON — явное объединение по условию",
        "MERGE — для upsert, не для объединения выборки"
      ]
    },
    {
      "id": 45,
      "question": "Как в Razor перебрать список и вывести элементы?",
      "code": "Model — List<Product>",
      "options": [
        "@Model.ForEach(p => @p.Name)",
        "@foreach (var p in Model) { <span>@p.Name</span> }",
        "@for (Model) { @Name }"
      ],
      "correctIndex": 1,
      "explanations": ["ForEach не возвращает разметку так", "foreach — стандартный цикл в Razor", "for требует индекс и коллекцию"]
    },
    {
      "id": 46,
      "question": "Что выведет: for (int i = 1; i <= 2; i++) { Console.Write(i * 10); }",
      "code": "C#",
      "options": [
        "1210",
        "20",
        "1020"
      ],
      "correctIndex": 2,
      "explanations": ["i=1: 10, i=2: 20 — не 1210", "выводится 10 и 20 подряд", "1020 — результат для i=1 и i=2"]
    },
    {
      "id": 47,
      "question": "Как посчитать количество строк в таблице?",
      "code": "Таблица Orders",
      "options": [
        "SELECT SUM(*) FROM Orders",
        "SELECT COUNT(*) FROM Orders",
        "SELECT TOTAL FROM Orders"
      ],
      "correctIndex": 1,
      "explanations": ["SUM для числовых колонок", "COUNT(*) считает строки", "TOTAL не агрегатная функция"]
    },
    {
      "id": 48,
      "question": "Как в форме указать действие и метод контроллера?",
      "code": "POST на Create",
      "options": [
        "<form action=\"Create\" method=\"post\">",
        "<form asp-action=\"Create\" asp-controller=\"Home\" method=\"post\">",
        "<form post=\"Create\">"
      ],
      "correctIndex": 1,
      "explanations": ["action без asp- не учитывает маршруты", "asp-action и asp-controller генерируют URL", "post — атрибут method"]
    },
    {
      "id": 49,
      "question": "Что вернёт: new[] { 5, 10, 15, 20 }.FirstOrDefault(x => x > 12);",
      "code": "LINQ",
      "options": [
        "15",
        "0",
        "null"
      ],
      "correctIndex": 0,
      "explanations": ["15 — первый элемент > 12", "0 — для int при отсутствии", "null — для ссылочных типов"]
    },
    {
      "id": 50,
      "question": "Как в SELECT задать псевдоним для колонки?",
      "code": "Колонка Name как FullName",
      "options": [
        "SELECT Name FullName FROM Users",
        "SELECT Name AS \"FullName\" FROM Users",
        "SELECT Name AS FullName FROM Users"
      ],
      "correctIndex": 2,
      "explanations": ["пробел может работать, но AS явнее", "кавычки для зарезервированных имён", "AS псевдоним — стандартный синтаксис"]
    },
    {
      "id": 51,
      "question": "Выбери неправильный вариант: Как в ProductController получить Id из маршрута c помощью аттрибута HttpGet?",
      "code": "GET /Product/Details/5",
      "options": [
        "[HttpGet(\"Details/{id}\")] public IActionResult Details(int id)",
        "[HttpGet] public IActionResult Details(int id)",
        "[HttpGet(\"Details/{id:int}\")] public IActionResult Details(int? id = Request.Id)"
      ],
      "correctIndex": 1,
      "explanations": ["явный маршрут с id — корректно", "базовый [HttpGet] с параметром — корректно (нужно выбрать неправильный)", "Request.Id не используется для привязки параметра"]
    },
    {
      "id": 52,
      "question": "Что выведет: \n        if (false && true) \n        {\n            Console.Write(\"A\");\n        } else \n        {\n            Console.Write(\"B\");\n        }",
      "code": "C#",
      "options": [
        "B",
        "A",
        "AB"
      ],
      "correctIndex": 0,
      "explanations": ["false && что угодно = false, выполняется else", "ветка if не выполняется", "выполняется только одна ветка"]
    },
    {
      "id": 53,
      "question": "Как обновить строки с условием по дате?",
      "code": "Status = 'Done' где Created < '2024-01-01'",
      "options": [
        "UPDATE Tasks SET Status = 'Done' IF Created < '2024-01-01'",
        "SET Tasks.Status = 'Done' WHERE Created < '2024-01-01'",
        "UPDATE Tasks SET Status = 'Done' WHERE Created < '2024-01-01'"
      ],
      "correctIndex": 2,
      "explanations": ["в SQL используется WHERE, не IF", "нужен UPDATE в начале", "UPDATE SET ... WHERE — корректный синтаксис"]
    },
    {
      "id": 54,
      "question": "Как в Razor  в форме сделать поле для ввода значения для свойства Name из модели?",
      "code": "Tag Helpers",
      "options": [
        "<input name=\"Model.Name\" />",
        "<input bind=\"Name\" />",
        "<input asp-for=\"Name\" />"
      ],
      "correctIndex": 2,
      "explanations": ["name может работать, но без привязки", "bind — не Razor Tag Helper", "asp-for привязывает к свойству модели"]
    },
    {
      "id": 55,
      "question": "Что вернёт: new List<int> { 1, 2, 3 }.Sum();",
      "code": "LINQ",
      "options": [
        "3",
        "1",
        "6"
      ],
      "correctIndex": 2,
      "explanations": ["3 — количество элементов", "1 — первый элемент", "1+2+3=6"]
    },
    {
      "id": 56,
      "question": "Как выбрать строки, где поле не NULL?",
      "code": "Колонка Email",
      "options": [
        "WHERE Email != NULL",
        "WHERE Email IS NOT NULL",
        "WHERE NOT NULL(Email)"
      ],
      "correctIndex": 1,
      "explanations": ["с NULL используется IS, не = или !=", "IS NOT NULL — корректная проверка", "NOT NULL(Email) неверный синтаксис"]
    },
    {
      "id": 57,
      "question": "Как в Controller проверить, что запрос пришёл методом POST?",
      "code": "ASP.NET Core",
      "options": [
        "if (Request.IsPost)",
        "Request.Type == Post",
        "if (Request.Method == \"POST\") или [HttpPost] на действии"
      ],
      "correctIndex": 2,
      "explanations": ["IsPost не стандартное свойство", "Type == Post неверно", "[HttpPost] ограничивает действие"]
    },
    {
      "id": 58,
      "question": "Что выведет: foreach (var n in new[] { 2, 2 }) Console.Write(n);",
      "code": "C#",
      "options": [
        "4",
        "22",
        "2"
      ],
      "correctIndex": 1,
      "explanations": [
        "foreach не суммирует, а перебирает",
        "два элемента 2 и 2 выводятся подряд — 22",
        "выводится оба элемента, не один"
      ]
    },
    {
      "id": 59,
      "question": "Как ограничить выборку по количеству записей?",
      "code": "SQL Server — 5 записей",
      "options": [
        "SELECT * FROM Users LIMIT 5",
        "SELECT * FROM Users MAX 5",
        "SELECT TOP 5 * FROM Users"
      ],
      "correctIndex": 2,
      "explanations": ["LIMIT — MySQL/PostgreSQL", "MAX не для ограничения выборки", "TOP — синтаксис SQL Server"]
    },
    {
      "id": 60,
      "question": "Как в Razor написать комментарий, который не попадёт в HTML?",
      "code": "Серверный комментарий",
      "options": [
        "@* комментарий *@",
        "<!-- комментарий -->",
        "@// комментарий"
      ],
      "correctIndex": 0,
      "explanations": [
        "@* *@ — серверный комментарий Razor, не в HTML",
        "<!-- --> — HTML-комментарий, попадёт в разметку",
        "@// — может интерпретироваться как код"
      ]
    },
    {
      "id": 61,
      "question": "Что вернёт: new[] { \"a\", \"bb\", \"c\" }.OrderBy(s => s.Length).First();",
      "code": "LINQ",
      "options": [
        "c",
        "a",
        "bb"
      ],
      "correctIndex": 1,
      "explanations": ["c имеет длину 1, как и a", "по длине: a(1), c(1), bb(2); First даёт a", "bb — самый длинный"]
    },
    {
      "id": 62,
      "question": "Как в WHERE указать «строка содержит подстроку»?",
      "code": "SQL Server, колонка Name",
      "options": [
        "WHERE Name CONTAINS 'text'",
        "WHERE Name IN 'text'",
        "WHERE Name LIKE '%text%'"
      ],
      "correctIndex": 2,
      "explanations": ["CONTAINS для полнотекстового поиска", "IN для списка значений", "LIKE '%text%' — подстрока в любом месте"]
    },
    {
      "id": 63,
      "question": "Как в Razor задать значение по умолчанию для отображения?",
      "code": "Если Model.Name пустой — показать «Без имени»",
      "options": [
        "@Model.Name.Default(\"Без имени\")",
        "@(Model?.Name ?? \"Без имени\")",
        "@Model.Name ?? \"Без имени\""
      ],
      "correctIndex": 1,
      "explanations": ["Default не у string", "?? подставляет при null/пустоте; скобки для приоритета", "без ?. упадёт при null Model"]
    },
    {
      "id": 64,
      "question": "Что выведет: int x = 2; do { Console.Write(x); x++; } while (x < 2);",
      "code": "C# do-while",
      "options": [
        "2",
        "12",
        "ничего"
      ],
      "correctIndex": 0,
      "explanations": ["do выполняется минимум раз: вывод 2, потом x=3, выход", "цикл не повторяется", "один проход есть"]
    },
    {
      "id": 65,
      "question": "Как в SELECT сложить два поля?",
      "code": "Price и Tax в таблице Orders",
      "options": [
        "SELECT SUM(Price, Tax) FROM Orders",
        "SELECT Price + Tax AS Total FROM Orders",
        "SELECT Price, Tax, Total FROM Orders"
      ],
      "correctIndex": 1,
      "explanations": ["SUM принимает один аргумент", "арифметика + в SELECT", "Total — не колонка, нужен AS"]
    },
    {
      "id": 66,
      "question": "Как в Razor показать разметку только при выполнении условия?",
      "code": "Показать блок, если Model.HasItems",
      "options": [
        "@Model.HasItems ? <ul>...</ul>",
        "@show(Model.HasItems, \"<ul>...</ul>\")",
        "@if (Model.HasItems) { <ul>...</ul> }"
      ],
      "correctIndex": 2,
      "explanations": ["тернарный с разметкой сложнее в Razor", "show не существует", "if с блоком — стандартный способ"]
    },
    {
      "id": 67,
      "question": "Что вернёт: new[] { 1, 2, 3 }.Skip(1).Take(1).First();",
      "code": "LINQ",
      "options": [
        "2",
        "1",
        "3"
      ],
      "correctIndex": 0,
      "explanations": ["Skip(1) пропускает 1, Take(1) берёт один — это 2", "1 пропущен Skip", "3 не входит в Take(1)"]
    },
    {
      "id": 68,
      "question": "Как сгруппировать строки по полю и посчитать количество в каждой группе?",
      "code": "Группа по City из Users",
      "options": [
        "SELECT City, COUNT(*) FROM Users GROUP BY City",
        "SELECT City, SUM(*) FROM Users GROUP BY City",
        "SELECT City, COUNT(*) FROM Users BY City"
      ],
      "correctIndex": 0,
      "explanations": ["GROUP BY с COUNT — подсчёт в группах", "SUM(*) не используется", "нужно GROUP BY, не BY"]
    },
    {
      "id": 69,
      "question": "Как в форме Razor привязать поле к свойству модели?",
      "code": "Свойство Product.Price",
      "options": [
        "<input name=\"Price\" />",
        "<input bind=\"Product.Price\" />",
        "<input asp-for=\"Price\" />"
      ],
      "correctIndex": 2,
      "explanations": ["name без asp-for не даёт полной привязки", "bind не Razor", "asp-for привязывает к свойству"]
    },
    {
      "id": 70,
      "question": "Что выведет: var s = \"\"; if (string.IsNullOrEmpty(s)) Console.Write(\"Y\");",
      "code": "C#",
      "options": [
        "Y",
        "ничего",
        "s"
      ],
      "correctIndex": 0,
      "explanations": ["пустая строка — IsNullOrEmpty true, выводится Y", "блок if выполняется", "выводится литерал Y"]
    },
    {
      "id": 71,
      "question": "Как выбрать строки с датой в диапазоне?",
      "code": "Created между 2024-01-01 и 2024-12-31",
      "options": [
        "WHERE Created IN ('2024-01-01', '2024-12-31')",
        "WHERE Created RANGE '2024-01-01' TO '2024-12-31'",
        "WHERE Created BETWEEN '2024-01-01' AND '2024-12-31'"
      ],
      "correctIndex": 2,
      "explanations": [
        "IN — для списка дискретных значений",
        "RANGE TO — не синтаксис SQL",
        "BETWEEN AND — для диапазона включительно"
      ]
    },
    {
      "id": 72,
      "question": "Как корректно принять сложный объект из JSON в теле POST-запроса в API-контроллере?",
      "code": "public class CreateUserDto { public string Name { get; set; } }",
      "options": [
        "public IActionResult Create(string json) { /* парсить JSON вручную */ }",
        "public IActionResult Create([FromBody] CreateUserDto dto) { /* использовать dto */ }",
        "public IActionResult Create() { var dto = new CreateUserDto(); /* заполнить вручную */ }"
      ],
      "correctIndex": 1,
      "explanations": [
        "строка json требует ручного парсинга и обходит модель-привязку",
        "атрибут [FromBody] (или просто параметр модели в API-контроллере) позволяет фреймворку самостоятелно разобрать JSON — верно",
        "создание dto вручную не читает тело запроса"
      ]
    },
    {
      "id": 73,
      "question": "Что вернёт: new[] { 10, 20, 30 }.Max();",
      "code": "LINQ",
      "options": [
        "30",
        "60",
        "20"
      ],
      "correctIndex": 0,
      "explanations": [
        "Max() возвращает максимальный элемент",
        "60 — сумма, не максимум",
        "20 — средний, не максимальный"
      ]
    },
    {
      "id": 74,
      "question": "Как в UPDATE задать значение из другой таблицы?",
      "code": "Обновить Users.Name из TempData по Id",
      "options": [
        "UPDATE Users SET Name = SELECT Name FROM TempData",
        "UPDATE Users SET Name = TempData.Name",
        "UPDATE u SET u.Name = t.Name FROM Users u JOIN TempData t ON u.Id = t.Id"
      ],
      "correctIndex": 2,
      "explanations": [
        "подзапрос в SET требует скобок и связи по Id",
        "прямая ссылка на таблицу без JOIN неверна",
        "UPDATE с FROM и JOIN — корректный способ в T-SQL"
      ]
    },
    {
      "id": 75,
      "question": "Как в Razor объявить переменную для использования в разметке?",
      "code": "Переменная count",
      "options": [
        "@{ var count = 0; }",
        "@var count = 0;",
        "@(var count = 0)"
      ],
      "correctIndex": 0,
      "explanations": [
        "@{} — блок кода для объявления переменных",
        "@var — неверный синтаксис Razor",
        "@() — для выражений с выводом, не объявлений"
      ]
    },
    {
      "id": 76,
      "question": "Что выведет: for (int i = 0; i < 2; i++) { if (i == 1) break; Console.Write(i); }",
      "code": "C#",
      "options": [
        "0",
        "01",
        "1"
      ],
      "correctIndex": 0,
      "explanations": [
        "i=0: вывод 0; i=1: break до Write — выход",
        "при i=1 выполняется break, 1 не выводится",
        "0 выводится первым, не 1"
      ]
    },
    {
      "id": 77,
      "question": "Как выбрать строки, где колонка равна одному из значений?",
      "code": "Status = 'New' или 'Pending'",
      "options": [
        "WHERE Status IN ('New', 'Pending')",
        "WHERE Status = 'New' OR 'Pending'",
        "WHERE Status IN 'New', 'Pending'"
      ],
      "correctIndex": 0,
      "explanations": [
        "IN (список) — проверка на вхождение",
        "OR требует полного условия: Status = 'Pending'",
        "IN требует скобок вокруг списка"
      ]
    },
    {
      "id": 78,
      "question": "Как в Razor указать, что форма отправляется методом POST?",
      "code": "Tag Helpers",
      "options": [
        "<form post=\"true\">",
        "@Form.Method(\"post\")",
        "<form method=\"post\" asp-action=\"Create\">"
      ],
      "correctIndex": 2,
      "explanations": [
        "post=\"true\" — не стандартный атрибут",
        "Form.Method не существует",
        "method=\"post\" — стандартный способ"
      ]
    },
    {
      "id": 79,
      "question": "Что делает .ToList() в LINQ?",
      "code": "var list = query.ToList();",
      "options": [
        "Выполняет запрос и материализует результат в список",
        "Сортирует по списку",
        "Объединяет списки"
      ],
      "correctIndex": 0,
      "explanations": [
        "ToList() выполняет отложенный запрос и создаёт List",
        "сортировка — OrderBy",
        "объединение — Concat или Union"
      ]
    },
    {
      "id": 80,
      "question": "Как в SELECT использовать условие в выводе?",
      "code": "Если Price > 100 — «дорого», иначе «норм»",
      "options": [
        "SELECT CASE WHEN Price > 100 THEN 'дорого' ELSE 'норм' END FROM Products",
        "SELECT IF Price > 100 THEN 'дорого' FROM Products",
        "SELECT Price > 100 ? 'дорого' : 'норм' FROM Products"
      ],
      "correctIndex": 0,
      "explanations": [
        "CASE WHEN ... THEN ... ELSE ... END — условное выражение в SQL",
        "IF — не в SELECT для значений",
        "тернарный ? : — синтаксис C#, не SQL"
      ]
    },
    {
      "id": 81,
      "question": "Как в Controller перенаправить на другой URL(для другого метода в этом же контроллере)?",
      "code": "После создания сущности — на страницу списка",
      "options": [
        "return RedirectToAction(\"Index\");",
        "return Redirect(\"Index\");",
        "Response.Redirect(\"Index\");"
      ],
      "correctIndex": 0,
      "explanations": [
        "RedirectToAction — редирект по имени действия",
        "Redirect — для полного URL",
        "Response.Redirect — WebForms, не Core"
      ]
    },
    {
      "id": 82,
      "question": "Что выведет: int? n = null; Console.Write(n ?? 5);",
      "code": "C# nullable",
      "options": [
        "null",
        "5",
        "0"
      ],
      "correctIndex": 1,
      "explanations": [
        "?? возвращает правое значение при null",
        "n null — оператор ?? даёт 5",
        "0 — для default(int), не при ??"
      ]
    },
    {
      "id": 83,
      "question": "Как удалить таблицу?",
      "code": "Таблица Temp",
      "options": [
        "DROP TABLE Temp",
        "DELETE TABLE Temp",
        "REMOVE TABLE Temp"
      ],
      "correctIndex": 0,
      "explanations": [
        "DROP TABLE — удаление структуры таблицы",
        "DELETE удаляет строки, не таблицу",
        "REMOVE не используется в SQL"
      ]
    },
    {
      "id": 84,
      "question": "Как вывести список с в формате \"элемент, индекс_элемента\"?",
      "code": "list — cписок объектов",
      "options": [
        "foreach (var (i,item) in list) { Console.WriteLine(\"{item}, {i}\"); }}",
        "for (var i = 0; i < list.Count; i++) { Console.WriteLine(\$\"{item[i]}, {i}\"); }",
        "list.ForEach((item) => Console.WriteLine(item))"
      ],
      "correctIndex": 1,
      "explanations": [
        "т.к list это список объектов, а не список пар, то foreach (var (i,item) in list) не работает, т.к нельзя разобрать обычный объект на пару.",
        "верный вариант",
        "выводит только элементы без индекса"
      ]
    },
    {
      "id": 85,
      "question": "Что вернёт: new[] { \"a\", \"b\" }.Contains(\"a\");",
      "code": "LINQ",
      "options": [
        "false",
        "true",
        "\"a\""
      ],
      "correctIndex": 1,
      "explanations": [
        "\"a\" есть в массиве",
        "Contains возвращает true при наличии элемента",
        "Contains возвращает bool, не элемент"
      ]
    },
    {
      "id": 86,
      "question": "Как объединить результаты двух SELECT в один набор?",
      "code": "UNION",
      "options": [
        "SELECT Name FROM A + SELECT Name FROM B",
        "SELECT Name FROM A UNION SELECT Name FROM B",
        "SELECT Name FROM A JOIN B"
      ],
      "correctIndex": 1,
      "explanations": [
        "+ не объединяет результаты запросов",
        "UNION объединяет два набора строк",
        "JOIN объединяет таблицы, не результаты SELECT"
      ]
    },
    {
      "id": 87,
      "question": "Как в Razor сформировать ссылку на действие контроллера?",
      "code": "Ссылка на Home/Index",
      "options": [
        "<a asp-controller=\"Home\" asp-action=\"Index\">Текст</a>",
        "<a href=\"Home/Index\">Текст</a>",
        "<a src=\"Home/Index\">Текст</a>"
      ],
      "correctIndex": 0,
      "explanations": [
        "asp-controller и asp-action генерируют URL по маршрутам",
        "href жёстко задан, не учитывает маршрутизацию",
        "src — для ресурсов (img, script), не для ссылок"
      ]
    },
    {
      "id": 88,
      "question": "Что выведет: switch(1) { case 1: Console.Write(\"A\"); break; default: Console.Write(\"B\"); break; }",
      "code": "C#",
      "options": [
        "A",
        "B",
        "AB"
      ],
      "correctIndex": 0,
      "explanations": [
        "case 1 совпадает — выполняется только эта ветка",
        "default не выполняется при совпадении case",
        "break выходит из switch, вторая ветка не выполняется"
      ]
    },
    {
      "id": 89,
      "question": "Как в WHERE исключить строки по списку значений?",
      "code": "Id не 1, 2, 3",
      "options": [
        "WHERE Id != (1, 2, 3)",
        "WHERE Id NOT (1, 2, 3)",
        "WHERE Id NOT IN (1, 2, 3)"
      ],
      "correctIndex": 2,
      "explanations": [
        "!= не работает со списком",
        "NOT без IN неверно",
        "NOT IN (список) — исключение значений"
      ]
    },
    {
      "id": 90,
      "question": "Как в Razor проверить, что коллекция не пустая?",
      "code": "Model.Items",
      "options": [
        "@Model.Items.NotEmpty()",
        "@if (Model.Items.Count > 0)",
        "@if (Model.Items != null && Model.Items.Any())"
      ],
      "correctIndex": 2,
      "explanations": [
        "NotEmpty() не стандартный метод",
        "Count может быть недоступен (IEnumerable)",
        "null-проверка и Any() — универсально"
      ]
    },
    {
      "id": 91,
      "question": "Что вернёт: new[] { 2, 4, 6 }.Average();",
      "code": "LINQ",
      "options": [
        "6",
        "12",
        "4"
      ],
      "correctIndex": 2,
      "explanations": [
        "6 — максимальное, не среднее",
        "12 — сумма",
        "(2+4+6)/3 = 4"
      ]
    },
    {
      "id": 92,
      "question": "Как получить минимальное значение в колонке?",
      "code": "Колонка Price в Products",
      "options": [
        "SELECT MINIMUM(Price) FROM Products",
        "SELECT TOP 1 Price FROM Products ORDER BY Price",
        "SELECT MIN(Price) FROM Products"
      ],
      "correctIndex": 2,
      "explanations": [
        "в SQL используется MIN, не MINIMUM",
        "TOP 1 с ORDER BY тоже работает, но MIN проще",
        "MIN — агрегатная функция для минимума"
      ]
    },
    {
      "id": 93,
      "question": "Как в Razor передать параметр в ссылку на действие?",
      "code": "Id продукта в URL",
      "options": [
        "<a href=\"Details?id=@Model.Id\">Подробнее</a>",
        "@Url.Action(\"Details\", new { id = Model.Id })",
        "<a asp-action=\"Details\" asp-route-id=\"@Model.Id\">Подробнее</a>"
      ],
      "correctIndex": 2,
      "explanations": [
        "href с query — работает, но asp-route-id предпочтительнее",
        "Url.Action возвращает строку, не тег",
        "asp-route-id генерирует параметр маршрута"
      ]
    },
    {
      "id": 94,
      "question": "Что выведет: var a = new[] { 1 }; Console.Write(a.Length);",
      "code": "C#",
      "options": [
        "1",
        "0",
        "2"
      ],
      "correctIndex": 0,
      "explanations": [
        "Length — количество элементов, один элемент — 1",
        "массив не пустой",
        "два элемента было бы при { 1, 2 }"
      ]
    },
    {
      "id": 95,
      "question": "Как в SELECT ограничить результат по условию после группировки?",
      "code": "HAVING",
      "options": [
        "GROUP BY City WHERE COUNT(*) > 5",
        "GROUP BY City HAVING COUNT(*) > 5",
        "GROUP BY City HAVING COUNT(*)"
      ],
      "correctIndex": 1,
      "explanations": [
        "WHERE фильтрует до группировки",
        "HAVING — фильтр по результатам агрегации",
        "HAVING без условия не фильтрует"
      ]
    },
    {
      "id": 96,
      "question": "Что вернёт: \"hello\".ToUpper();",
      "code": "C#",
      "options": [
        "hello",
        "Hello",
        "HELLO"
      ],
      "correctIndex": 2,
      "explanations": [
        "ToUpper преобразует в верхний регистр",
        "Hello — только первая буква, это не ToUpper",
        "все символы в верхнем регистре"
      ]
    },
    {
      "id": 97,
      "question": "Как в SELECT получить подстроку из колонки?",
      "code": "SQL Server, первые 5 символов Name",
      "options": [
        "SELECT SUBSTR(Name, 1, 5) FROM Users",
        "SELECT SUBSTRING(Name, 1, 5) FROM Users",
        "SELECT STR(Name, 5) FROM Users"
      ],
      "correctIndex": 1,
      "explanations": [
        "SUBSTR — Oracle/MySQL, в T-SQL — SUBSTRING",
        "SUBSTRING(строка, начало, длина) — T-SQL",
        "STR — преобразование числа в строку"
      ]
    },
    {
      "id": 98,
      "question": "Как в Razor отобразить чекбокс для bool-свойства модели?",
      "code": "Свойство IsActive",
      "options": [
        "<checkbox asp-for=\"IsActive\">",
        "<input type=\"checkbox\" asp-for=\"IsActive\" />",
        "@Html.CheckBox(\"IsActive\")"
      ],
      "correctIndex": 1
    },
    {
      "id": 99,
      "question": "Что выведет: Console.Write(\"ab\".Length);",
      "code": "C#",
      "options": [
        "2",
        "ab",
        "0"
      ],
      "correctIndex": 0,
      "explanations": [
        "Length — количество символов в строке",
        "выводится число, не сама строка",
        "строка не пустая"
      ]
    },
    {
      "id": 100,
      "question": "Как в SELECT получить текущую дату сервера?",
      "code": "SQL Server",
      "options": [
        "SELECT NOW()",
        "SELECT CURRENT_DATE()",
        "SELECT GETDATE()"
      ],
      "correctIndex": 2,
      "explanations": [
        "NOW() — MySQL",
        "CURRENT_DATE — стандарт SQL, в T-SQL иначе",
        "GETDATE() — функция SQL Server"
      ]
    },
    {
      "id": 101,
      "question": "Что вернёт: new[] { 1, 2, 2 }.Distinct().Count();",
      "code": "LINQ",
      "options": [
        "3",
        "2",
        "1"
      ],
      "correctIndex": 1,
      "explanations": [
        "Distinct убирает дубликаты",
        "после Distinct: 1, 2 — Count = 2",
        "1 — только уникальный элемент"
      ]
    },
    {
      "id": 102,
      "question": "Что выведет: var b = true; Console.Write(!b ? \"A\" : \"B\");",
      "code": "C#",
      "options": ["B", "A", "true"],
      "correctIndex": 0,
      "explanations": ["!true = false, тернарный даёт \"B\"", "A при истинном условии", "выводится строка, не bool"]
    },
    {
      "id": 103,
      "question": "Как получить максимальное значение в колонке Price?",
      "code": "SQL",
      "options": ["SELECT TOP 1 Price FROM Products", "SELECT MAX(Price) FROM Products", "SELECT HIGHEST(Price) FROM Products"],
      "correctIndex": 1,
      "explanations": ["TOP 1 с ORDER BY тоже работает", "MAX — агрегатная функция", "HIGHEST не существует"]
    },
    {
      "id": 104,
      "question": "Как в Razor объединить несколько условий в условии?",
      "code": "Показать при Model.Active и Model.Visible",
      "options": ["@if (Model.Active AND Model.Visible)", "@if (Model.Active + Model.Visible)", "@if (Model.Active && Model.Visible)"],
      "correctIndex": 2,
      "explanations": ["AND — не C#, в C# используется &&", "+ не для логики", "&& — логическое И в C#"]
    },
    {
      "id": 105,
      "question": "Что вернёт: new[] { 5, 10, 15 }.All(x => x > 0);",
      "code": "LINQ",
      "options": ["false", "true", "0"],
      "correctIndex": 1,
      "explanations": ["все элементы > 0", "All возвращает true, если все удовлетворяют", "All возвращает bool"]
    },
    {
      "id": 106,
      "question": "Как в SELECT переименовать результат агрегатной функции?",
      "code": "COUNT(*) как Total",
      "options": ["SELECT COUNT(*) Total FROM Orders", "SELECT COUNT(*) AS Total FROM Orders", "SELECT COUNT(*) AS \"Total\" FROM Orders"],
      "correctIndex": 1,
      "explanations": ["пробел может работать, AS явнее", "AS псевдоним — стандартный способ", "кавычки для зарезервированных имён"]
    },
    {
      "id": 107,
      "question": "Как в Controller вернуть представление с именем и моделью?",
      "code": "View \"Details\", модель product",
      "options": ["return View(product, \"Details\");", "return View(\"Details\", product);", "return View().Name(\"Details\").Model(product);"],
      "correctIndex": 1,
      "explanations": ["порядок аргументов неверный", "View(имя, модель) — правильный порядок", "Name и Model не методы View"]
    },
    {
      "id": 108,
      "question": "Что выведет: int i = 0; while (i++ < 2) Console.Write(i);",
      "code": "C#",
      "options": ["123", "12", "012"],
      "correctIndex": 1,
      "explanations": ["при i=2 цикл выходит, 3 не выводится", "i++: 0<2→i=1, 1<2→i=2, 2<2 ложно→выход", "0 не выводится — сначала сравнение, потом инкремент"]
    },
    {
      "id": 109,
      "question": "Как в WHERE указать «значение между двумя числами»?",
      "code": "Id от 1 до 10",
      "options": ["WHERE Id BETWEEN 1 AND 10", "WHERE Id IN (1, 10)", "WHERE Id RANGE 1 TO 10"],
      "correctIndex": 0,
      "explanations": ["BETWEEN AND — диапазон включительно", "IN — дискретные значения", "RANGE TO — не SQL"]
    },
    {
      "id": 110,
      "question": "Что делает GroupBy в LINQ?",
      "code": "items.GroupBy(x => x.Category)",
      "options": ["Сортирует по Category", "Группирует элементы по ключу Category", "Фильтрует по Category"],
      "correctIndex": 1,
      "explanations": ["сортировка — OrderBy", "GroupBy создаёт группы по ключу", "фильтрация — Where"]
    },
    {
      "id": 111,
      "question": "Что делает .Take(3) в LINQ?",
      "code": "var a = list.Take(3);",
      "options": ["Берёт первые 3 элемента", "Берёт каждый 3-й элемент", "Пропускает 3 элемента"],
      "correctIndex": 0,
      "explanations": ["Take(n) — первые n элементов", "каждый n-й — другой подход", "пропуск — Skip"]
    },
    {
      "id": 112,
      "question": "Как в SQL Server склеить строки из двух колонок?",
      "code": "Name и Surname",
      "options": ["SELECT Name + Surname FROM Users", "SELECT CONCAT(Name, ' ', Surname) FROM Users", "SELECT JOIN(Name, Surname) FROM Users"],
      "correctIndex": 1,
      "explanations": ["+ склеит без пробела", "CONCAT с разделителем — надёжнее при NULL", "JOIN не для склейки строк"]
    },
    {
      "id": 113,
      "question": "Как в форме Razor указать placeholder для поля ввода?",
      "code": "Tag Helpers",
      "options": ["<input placeholder=\"Введите имя\" />", "<input asp-placeholder=\"Введите имя\" />", "<input asp-for=\"Name\" placeholder=\"Введите имя\" />"],
      "correctIndex": 2,
      "explanations": ["placeholder без asp-for не привязан к модели", "asp-placeholder не существует", "asp-for с placeholder — привязка и подсказка"]
    },
    {
      "id": 114,
      "question": "Что выведет: for (int i = 2; i > 0; i--) Console.Write(i);",
      "code": "C#",
      "options": ["210", "21", "2"],
      "correctIndex": 1,
      "explanations": ["0 не выводится — при i=0 условие i>0 ложно", "i=2, 1 выводятся; при i=0 выход", "выводится 2 и 1"]
    },
    {
      "id": 115,
      "question": "Как выбрать строки, где колонка равна NULL?",
      "code": "Поле DeletedAt",
      "options": ["WHERE DeletedAt == NULL", "WHERE DeletedAt IS NULL", "WHERE DeletedAt = NULL"],
      "correctIndex": 1,
      "explanations": ["в SQL нет ==", "IS NULL — корректная проверка", "= NULL в SQL не работает"]
    },
    {
      "id": 116,
      "question": "Как в Razor проверить отрицание условия?",
      "code": "Если модель не активна",
      "options": ["@if (NOT Model.IsActive)", "@if (!Model.IsActive)", "@if (Model.IsActive == true)"],
      "correctIndex": 1,
      "explanations": ["NOT — не C#, используется !", "! — оператор отрицания", "проверка на true, не отрицание"]
    },
    {
      "id": 117,
      "question": "Что вернёт: new[] { 1, 2, 3 }.Reverse().First();",
      "code": "LINQ",
      "options": ["3", "1", "321"],
      "correctIndex": 0,
      "explanations": ["Reverse переворачивает, First берёт первый — 3", "1 был бы без Reverse", "Reverse не склеивает в строку"]
    },
    {
      "id": 118,
      "question": "Как в SELECT посчитать сумму всех значений в колонке?",
      "code": "Колонка Total в Orders",
      "options": ["SELECT ADD(Total) FROM Orders", "SELECT TOTAL(Total) FROM Orders", "SELECT SUM(Total) FROM Orders"],
      "correctIndex": 2,
      "explanations": ["ADD не агрегатная функция", "TOTAL не используется", "SUM — агрегатная функция суммы"]
    },
    {
      "id": 119,
      "question": "Как в Controller указать, что действие принимает только POST-запросы?",
      "code": "ASP.NET Core",
      "options": ["[HttpGet] на действии", "[HttpPost] на действии", "method = post в атрибуте"],
      "correctIndex": 1,
      "explanations": ["HttpGet — для GET", "[HttpPost] ограничивает метод", "method в атрибуте маршрута — не так"]
    },
    {
      "id": 120,
      "question": "Что выведет: switch(2) { case 1: Console.Write(\"A\"); break; case 2: Console.Write(\"B\"); break; }",
      "code": "C#",
      "options": ["AB", "2", "B"],
      "correctIndex": 2,
      "explanations": ["выполняется только одна ветка", "выводится значение case, не число", "case 2 совпадает — выводится B"]
    },
    {
      "id": 121,
      "question": "Как отсортировать выборку по убыванию?",
      "code": "По Price",
      "options": ["ORDER BY Price ASC", "SORT BY Price DESC", "ORDER BY Price DESC"],
      "correctIndex": 2,
      "explanations": ["ASC — по возрастанию", "SORT BY не SQL", "DESC — по убыванию"]
    },
    {
      "id": 122,
      "question": "Как в Razor проверить, что коллекция модели не пустая?",
      "code": "Model.Items",
      "options": ["@Model.Items.NotEmpty()", "@if (Model.Items != null && Model.Items.Any())", "@Model.Items.Count > 0"],
      "correctIndex": 1,
      "explanations": ["NotEmpty не существует", "null и Any — универсальная проверка", "Count может быть недоступен для IEnumerable"]
    },
    {
      "id": 123,
      "question": "Что делает .Skip(2) в LINQ?",
      "code": "var a = list.Skip(2);",
      "options": ["Берёт только 2-й элемент", "Пропускает первые 2 элемента", "Удаляет первые 2 элемента"],
      "correctIndex": 1,
      "explanations": ["второй элемент — list.ElementAt(1)", "Skip(n) пропускает n первых", "Skip не изменяет исходную коллекцию"]
    },
    {
      "id": 124,
      "question": "Как в WHERE объединить два условия через И?",
      "code": "Status = Done И Created > дата",
      "options": ["WHERE Status = 'Done', Created > '2024-01-01'", "WHERE Status = 'Done' AND Created > '2024-01-01'", "WHERE Status = 'Done' && Created > '2024-01-01'"],
      "correctIndex": 1,
      "explanations": ["запятая не для логики", "AND — логическое И в SQL", "&& — C#, в SQL используется AND"]
    },
    {
      "id": 125,
      "question": "Как в Razor вывести ссылку с параметрами маршрута?",
      "code": "Ссылка на Edit с id",
      "options": ["<a href=\"Edit?id=@Model.Id\">Изменить</a>", "<a asp-action=\"Edit\" asp-route-id=\"@Model.Id\">Изменить</a>", "<a asp-route=\"Edit\" asp-id=\"@Model.Id\">Изменить</a>"],
      "correctIndex": 1,
      "explanations": ["href с query работает, asp-route-id лучше", "asp-action и asp-route-id — Tag Helpers", "asp-route — имя маршрута, asp-id неверно"]
    },
    {
      "id": 126,
      "question": "Что выведет: Console.Write(\"ab\".Substring(1, 1));",
      "code": "C#",
      "options": ["a", "b", "ab"],
      "correctIndex": 1,
      "explanations": ["a — индекс 0", "Substring(1,1) — с позиции 1, длина 1 — b", "длина 1, не вся строка"]
    },
    {
      "id": 127,
      "question": "Как в WHERE указать условие ИЛИ?",
      "code": "Status = New или Pending",
      "options": ["WHERE Status IN ('New', 'Pending')", "WHERE Status = 'New' OR Status = 'Pending'", "WHERE Status = 'New' | 'Pending'"],
      "correctIndex": 1,
      "explanations": ["IN тоже подходит, но OR явнее для двух значений", "OR объединяет условия", "| — побитовое ИЛИ, не логическое"]
    },
    {
      "id": 128,
      "question": "Как в Razor указать значение по умолчанию для nullable типа?",
      "code": "Model.Count может быть null",
      "options": ["@Model.Count.Or(0)", "@(Model.Count ?? 0)", "@Model.Count ?? 0"],
      "correctIndex": 1,
      "explanations": ["Or не у nullable", "?? подставляет при null; скобки для приоритета", "без скобок Razor может неправильно распарсить"]
    },
    {
      "id": 129,
      "question": "Что вернёт: new[] { 1, 2, 3 }.Last();",
      "code": "LINQ",
      "options": ["1", "6", "3"],
      "correctIndex": 2,
      "explanations": ["1 — первый элемент", "6 — сумма", "Last() возвращает последний элемент"]
    },
    {
      "id": 130,
      "question": "Как в SELECT ограничить длину выводимой строки?",
      "code": "SQL Server, первые 10 символов Name",
      "options": ["SELECT SUBSTRING(Name, 1, 10) FROM Users", "SELECT TRUNCATE(Name, 10) FROM Users", "SELECT LEFT(Name, 10) FROM Users"],
      "correctIndex": 2,
      "explanations": ["SUBSTRING тоже работает", "TRUNCATE — для чисел", "LEFT(строка, n) — первые n символов в T-SQL"]
    },
    {
      "id": 131,
      "question": "Как в Razor указать тип модели страницы?",
      "code": "Модель — Product",
      "options": ["@Model Product", "@model Product", "model Product;"],
      "correctIndex": 1,
      "explanations": ["@Model — доступ к данным", "@model с маленькой m — директива типа", "model без @ не распознаётся"]
    },
    // === LINQ: группировка и Select (132–141) ===
    {
      "id": 132,
      "question": "Получить для каждой категории количество элементов. items — List<Product> с полем Category.",
      "code": "items — List<Product>, каждый Product с полями Category,Price,Id",
      "options": [
        "items.GroupBy(x => x.Category).Select(g => g.Count())",
        "items.Select(x => x.Category).GroupBy(c => c).Select(g => g.Key)",
        "items.GroupBy(x => x.Id).Select(g => g.Count())"
      ],
      "correctIndex": 0,
      "explanations": [
        "GroupBy по Category и Select с Count() по каждой группе — верно",
        "теряем связь «категория → количество», получаем ключи",
        "группировка по Id даёт по одному элементу в группе"
      ]
    },
    {
      "id": 133,
      "question": "Найти категории, в которых есть хотя бы один товар с ценой > 1000.",
      "code": "items — List<Product>, каждый Product с полями Category,Price,Id",
      "options": [
        "items.GroupBy(x => x.Category).Select(g => g.Key).Where(k => k != null)",
        "items.GroupBy(x => x.Category).Where(g => g.Any(p => p.Price > 1000)).Select(g => g.Key)",
        "items.Where(x => x.Price > 1000).Select(x => x.Category)"
      ],
      "correctIndex": 1,
      "explanations": [
        "Where по ключу не проверяет условие внутри группы",
        "Where(g => g.Any(...)) фильтрует группы по условию, затем Select(Key) — верно",
        "работает, но без группировки; по условию нужна группировка и последующий Select"
      ]
    },
    {
      "id": 134,
      "question": "По каждому году (Year) получить максимальную сумму заказа (Amount). ",
      "code": "orders — список заказов, где у каждого заказа есть Year, Amount.",
      "options": [
        "orders.GroupBy(x => x.Year).Select(g => g.Max(x => x.Amount))",
        "orders.Select(x => x.Year).Distinct().Select(y => orders.Where(o => o.Year == y).Max(o => o.Amount))",
        "orders.GroupBy(x => x.Year).Select(g => new { Year = g.Key, MaxAmount = g.Max(o => o.Amount) })"
      ],
      "correctIndex": 2,
      "explanations": [
        "теряем год — остаётся только значение MaxAmount",
        "работает, но без группировки и не один цепочный вызов",
        "группировка по Year и проекция с Key и Max — верно"
      ]
    },
    {
      "id": 135,
      "question": "Получить города (City), в которых больше 5 пользователей. users — List<User>.",
      "code": "users - список пользователей, каждый User с полем City",
      "options": [
        "users.Where(u => u.City != null).GroupBy(u => u.City).Select(g => g.Count() > 5)",
        "users.GroupBy(u => u.City).Where(g => g.Count() > 5).Select(g => g.Key)",
        "users.GroupBy(u => u.City).Select(g => g.Key).Where(k => users.Count(u => u.City == k) > 5)"
      ],
      "correctIndex": 2,
      "explanations": [
        "Select даёт список boolОв, а не городов",
        "Where по Count и Select Key — верно; вариант эквивалентен по смыслу",
        "то же по смыслу: ключ и фильтр по количеству в городе"
      ]
    },
    {
      "id": 136,
      "question": "По каждому статусу (Status) вычислить среднюю цену (Price) и вернуть пары статус–средняя.",
      "code": "items - список товаров, каждый Item с полями Status,Price",
      "options": [
        "items.GroupBy(x => x.Status).Select(g => g.Average(x => x.Price))",
        "items.GroupBy(x => x.Status).Select(g => new { Status = g.Key, AvgPrice = g.Average(p => p.Price) })",
        "items.Select(x => new { x.Status, x.Price }).GroupBy(a => a.Status).Select(g => g.Average(a => a.Price))"
      ],
      "correctIndex": 1,
      "explanations": [
        "теряется статус, остаётся только число",
        "группировка по Status и проекция с Key и Average — верно",
        "в Select остаётся только среднее, без ключа"
      ]
    },
    {
      "id": 137,
      "question": "Найти категории с суммой цен (Price) больше 10000. items — List<Product>.",
      "code": "items - список товаров, каждый Item с полями Category,Price",
      "options": [
        "items.GroupBy(x => x.Category).Where(g => g.Sum(x => x.Price) > 10000).Select(g => g.Sum(x => x.Price))",
        "items.GroupBy(x => x.Category).Select(g => g.Sum(x => x.Price)).Where(s => s > 10000)",
        "items.GroupBy(x => x.Category).Where(g => g.Sum(x => x.Price) > 10000).Select(g => g.Key)"
      ],
      "correctIndex": 2,
      "explanations": [
        "Select возвращает сумму, а не категорию",
        "после Select теряется ключ категории, Where по сумме не вернёт категории",
        "Where по сумме группы и Select(Key) — верно"
      ]
    },
    {
      "id": 138,
      "question": "По каждому типу (Type) взять первый элемент после сортировки по дате (Date) по убыванию.",
      "code": "items - список товаров, каждый Item с полями Type,Date",
      "options": [
        "items.GroupBy(x => x.Type).Select(g => g.OrderByDescending(x => x.Date).First())",
        "items.OrderByDescending(x => x.Date).GroupBy(x => x.Type).Select(g => g.First())",
        "items.GroupBy(x => x.Type).Select(g => g.First()).OrderByDescending(x => x.Date)"
      ],
      "correctIndex": 1,
      "explanations": [
        "сначала группировка — внутри группы сортировка и First верны, но порядок вызовов не «сначала сортировка глобально»",
        "сначала глобальная сортировка, потом группировка — в каждой группе First даёт самый новый — верно",
        "First берётся без сортировки внутри группы, потом сортировка уже по одному элементу"
      ]
    },
    {
      "id": 139,
      "question": "Получить для каждого департамента (DeptId) количество активных (IsActive) сотрудников.",
      "code": "employees - список сотрудников, каждый Employee с полями DeptId,IsActive",
      "options": [
        "employees.GroupBy(x => x.DeptId).Select(g => g.Where(e => e.IsActive).Count())",
        "employees.Where(x => x.IsActive).GroupBy(x => x.DeptId).Select(g => g.Key)",
        "employees.Where(x => x.IsActive).GroupBy(x => x.DeptId).Select(g => new { DeptId = g.Key, Count = g.Count() })"
      ],
      "correctIndex": 2,
      "explanations": [
        "теряется DeptId, остаётся только Count",
        "теряется Count, остаётся только ключ",
        "фильтр по IsActive, группировка по DeptId, проекция с Key и Count — верно"
      ]
    },
    {
      "id": 140,
      "question": "Топ-3 категории по суммарной выручке (Price * Quantity)",
      "code": "items - список товаров, каждый Item с полями Category,Price,Quantity",
      "options": [
        "items.GroupBy(x => x.Category).Select(g => new { Cat = g.Key, Total = g.Max(x => x.Price * x.Quantity) }).OrderByDescending(a => a.Total).Take(3).Select(a => a.Cat)",
        "items.GroupBy(x => x.Category).OrderByDescending(g => g.Sum(x => x.Price * x.Quantity)).Take(3).Select(g => g.Key)",
        "items.Select(x => x.Price * x.Quantity).GroupBy(_ => 1).Take(3)"
      ],
      "correctIndex": 1,
      "explanations": [
        "Нашло топ 3 категории у которых самоя большая максимальаня разовая выручка",
        "GroupBy → OrderByDescending по сумме группы → Take(3) → Select(Key) — верно",
        "группировка по константе и Take(3) не по категориям"
      ]
    },
    {
      "id": 141,
      "question": "Получить суммарный объём продаж (Amount) по каждому Region и Year ",
      "code": "sales - список продаж, каждый Sale с полями Region,Year,Amount",
      "options": [
        "sales.GroupBy(x => x.Region).GroupBy(g => g.First().Year).Select(x => x.Sum(s => s.Amount))",
        "sales.GroupBy(x => new { x.Region, x.Year }).Select(g => g.Sum(s => s.Amount))",
        "sales.GroupBy(x => new { x.Region, x.Year }).Select(g => new { g.Key.Region, g.Key.Year, Total = g.Sum(s => s.Amount) })"
      ],
      "correctIndex": 2,
      "explanations": [
        "двойная группировка и Sum по неправильной структуре",
        "теряются Region и Year, остаётся только сумма",
        "составной ключ { Region, Year } и проекция с ключом и Total — верно"
      ]
    },
    // === SQL: группировка и агрегаты (142–151) ===
    {
      "id": 142,
      "question": "Получить для каждого города (City) количество пользователей. Таблица Users.",
      "code": "users - таблица пользователей, каждый User с полем City",
      "options": [
        "SELECT City, COUNT(*) FROM Users GROUP BY City",
        "SELECT City FROM Users GROUP BY City COUNT(*)",
        "SELECT City, COUNT(*) FROM Users WHERE City GROUP BY City"
      ],
      "correctIndex": 0,
      "explanations": [
        "GROUP BY City и COUNT(*) — корректный запрос",
        "COUNT(*) должен быть в SELECT, синтаксис GROUP BY неверен",
        "WHERE City — не условие фильтрации"
      ]
    },
    {
      "id": 143,
      "question": "Найти категории (CategoryId), у которых суммарная сумма заказов (Total) больше 50000. Таблица Orders.",
      "code": "orders - таблица заказов, каждый Order с полями CategoryId,Total",
      "options": [
        "SELECT CategoryId, SUM(Total) FROM Orders GROUP BY CategoryId HAVING SUM(Total) > 50000",
        "SELECT CategoryId, SUM(Total) FROM Orders WHERE SUM(Total) > 50000 GROUP BY CategoryId",
        "SELECT CategoryId FROM Orders GROUP BY CategoryId HAVING SUM(Total) > 50000"
      ],
      "correctIndex": 0,
      "explanations": [
        "GROUP BY, HAVING по агрегату и вывод суммы — корректно",
        "WHERE с агрегатом недопустим; нужен HAVING",
        "нет SUM(Total) в SELECT — по смыслу удобнее видеть сумму"
      ]
    },
    {
      "id": 144,
      "question": "По каждому статусу (Status) вывести среднюю сумму (Amount). Таблица Payments.",
      "code": "payments - таблица платежей, каждый Payment с полями Status,Amount",
      "options": [
        "SELECT Status FROM Payments GROUP BY Status AVG(Amount)",
        "SELECT Status, AVG(Amount) FROM Payments GROUP BY Status",
        "SELECT AVG(Amount), Status FROM Payments GROUP BY Amount"
      ],
      "correctIndex": 1,
      "explanations": [
        "AVG(Amount) должен быть в SELECT, не после GROUP BY",
        "GROUP BY Status и AVG(Amount) в SELECT — корректно",
        "GROUP BY Amount не по статусу; порядок и логика неверны"
      ]
    },
    {
      "id": 145,
      "question": "Города, в которых больше 10 заказов. Таблицы Orders, Users (связь по UserId).",
      "code": "users - таблица пользователей, каждый User с полями Id,City",
      "options": [
        "SELECT u.City FROM Users u JOIN Orders o ON u.Id = o.UserId GROUP BY u.City HAVING COUNT(*) > 10",
        "SELECT City FROM Orders GROUP BY City HAVING COUNT(*) > 10",
        "SELECT u.City, COUNT(*) FROM Users u JOIN Orders o ON u.Id = o.UserId WHERE COUNT(*) > 10 GROUP BY u.City"
      ],
      "correctIndex": 0,
      "explanations": [
        "JOIN по UserId, группировка по городу пользователя, HAVING по количеству — верно",
        "в Orders может не быть City; город берётся из Users",
        "WHERE с COUNT недопустим, нужен HAVING"
      ]
    },
    {
      "id": 146,
      "question": "Для каждого года (YEAR(Created)) — максимальная сумма заказа (Amount). Таблица Orders.",
      "code": "orders - таблица заказов, каждый Order с полями Created,Amount",
      "options": [
        "SELECT MAX(Amount) FROM Orders GROUP BY YEAR(Created)",
        "SELECT YEAR(Created), MAX(Amount) FROM Orders GROUP BY Created",
        "SELECT YEAR(Created), MAX(Amount) FROM Orders GROUP BY YEAR(Created)"
      ],
      "correctIndex": 2,
      "explanations": [
        "теряется год в выводе",
        "GROUP BY Created группирует по полной дате, не по году",
        "GROUP BY YEAR(Created) и вывод года с MAX(Amount) — корректно"
      ]
    },
    {
      "id": 147,
      "question": "Топ-5 категорий по количеству товаров. Таблица Products (CategoryId).",
      "code": "products - таблица товаров, каждый Product с полями CategoryId,Quantity",
      "options": [
        "SELECT TOP 5 CategoryId, COUNT(*) AS Cnt FROM Products GROUP BY CategoryId ORDER BY Cnt DESC",
        "SELECT CategoryId FROM Products ORDER BY COUNT(*) DESC GROUP BY CategoryId",
        "SELECT TOP 5 CategoryId FROM Products GROUP BY CategoryId HAVING COUNT(*) ORDER BY COUNT(*) DESC"
      ],
      "correctIndex": 0,
      "explanations": [
        "GROUP BY, ORDER BY по счётчику, TOP 5 — верно",
        "ORDER BY до GROUP BY недопустим в стандартном SQL",
        "HAVING COUNT(*) без условия; порядок ORDER BY после HAVING"
      ]
    },
    {
      "id": 148,
      "question": "Регионы (Region), где средний чек (Amount) больше 1000. Таблица Sales.",
      "code": "sales - таблица продаж, каждый Sale с полями Region,Amount",
      "options": [
        "SELECT Region FROM Sales WHERE AVG(Amount) > 1000 GROUP BY Region",
        "SELECT Region FROM Sales GROUP BY Region HAVING AVG(Amount) > 1000",
        "SELECT Region, AVG(Amount) FROM Sales GROUP BY Region HAVING AVG(Amount) > 1000"
      ],
      "correctIndex": 1,
      "explanations": [
        "WHERE с AVG недопустим, нужен HAVING",
        "GROUP BY Region и HAVING AVG(Amount) > 1000 — верно",
        "тоже верно по смыслу; выбран вариант без лишней колонки в ответе"
      ]
    },
    {
      "id": 149,
      "question": "По каждой паре (CategoryId, Year) — сумма продаж (Total). Таблица Sales.",
      "code": "sales - таблица продаж, каждый Sale с полями CategoryId,Year,Total",
      "options": [
        "SELECT CategoryId, SUM(Total) FROM Sales GROUP BY CategoryId, Year",
        "SELECT CategoryId, Year, SUM(Total) FROM Sales GROUP BY CategoryId, Year",
        "SELECT CategoryId, Year, SUM(Total) FROM Sales GROUP BY CategoryId"
      ],
      "correctIndex": 1,
      "explanations": [
        "Year в GROUP BY, но не в SELECT — неполный вывод пары",
        "GROUP BY CategoryId, Year и вывод пары с SUM — корректно",
        "GROUP BY только CategoryId — Year не агрегирован, ошибка в строгих диалектах"
      ]
    },
    {
      "id": 150,
      "question": "Департаменты (DeptId) с числом сотрудников больше 5. Таблица Employees.",
      "code": "employees - таблица сотрудников, каждый Employee с полями DeptId,IsActive",
      "options": [
        "SELECT DeptId FROM Employees GROUP BY DeptId HAVING COUNT(*) > 5",
        "SELECT DeptId, COUNT(*) FROM Employees GROUP BY DeptId WHERE COUNT(*) > 5",
        "SELECT DeptId FROM Employees WHERE COUNT(*) > 5 GROUP BY DeptId"
      ],
      "correctIndex": 0,
      "explanations": [
        "GROUP BY DeptId и HAVING COUNT(*) > 5 — верно",
        "WHERE с COUNT недопустим; HAVING после GROUP BY",
        "WHERE до GROUP BY не может содержать агрегаты"
      ]
    },
    {
      "id": 151,
      "question": "Для каждого статуса (Status) — количество и сумма (Amount). Таблица Orders.",
      "code": "orders - таблица заказов, каждый Order с полями Status,Amount",
      "options": [
        "SELECT Status, COUNT(*), SUM(*) FROM Orders GROUP BY Status, Amount",
        "SELECT Status, COUNT(Id), SUM(Amount) FROM Orders GROUP BY Status",
        "SELECT Status FROM Orders GROUP BY Status SELECT COUNT(*), SUM(Amount)"
      ],
      "correctIndex": 1,
      "explanations": [
        "GROUP BY Status, Amount разбивает по парам статус и сумма, а не по статусу",
        "GROUP BY Status и агрегаты COUNT, SUM — корректно",
        "два SELECT подряд недопустимы"
      ]
    },
    {
      "id": 152,
      "question": "Из списка пользователей получить Email только активных пользователей, отсортированных по имени.",
      "code": "users — List<User> с полями Name, Email, IsActive",
      "options": [
        "users.Where(u => u.IsActive).OrderBy(u => u.Name).Select(u => u.Email)",
        "users.Select(u => u.Email).Where(u => u.IsActive).OrderBy(u => u.Name)",
        "users.OrderBy(u => u.Email).Where(u => u.IsActive).Select(u => u.Name)"
      ],
      "correctIndex": 0,
      "explanations": [
        "сначала фильтр по IsActive, затем сортировка по Name и проекция Email — верно",
        "после Select(u => u.Email) объекта u уже нет, к IsActive не обратиться",
        "сортировка по Email и проекция Name не соответствуют условию"
      ]
    },
    {
      "id": 153,
      "question": "Получить пользователей, у которых больше 3 заказов. Таблицы Users(Id) и Orders(UserId).",
      "code": "SQL: JOIN, GROUP BY, HAVING",
      "options": [
        "SELECT u.Id FROM Users u JOIN Orders o ON u.Id = o.UserId AND COUNT(o.Id) > 3 ",
        "SELECT u.Id FROM Users u JOIN Orders o ON u.Id = o.UserId GROUP BY u.Id HAVING COUNT(o.Id) > 3",
        "SELECT u.Id FROM Users u JOIN Orders o ON u.Id = o.UserId WHERE COUNT(o.Id) > 3"
      ],
      "correctIndex": 1,
      "explanations": [
        "COUNT(o.Id) нельзя использовать в JOIN, нужен HAVING",
        "JOIN, GROUP BY по пользователю и HAVING по количеству заказов — верно",
        "COUNT(o.Id) в WHERE недопустим, нужен HAVING"
      ]
    },
    {
      "id": 154,
      "question": "По каждому пользователю получить суммарную стоимость заказов. ",
      "code": "orders — List<Order> с полями UserId, Amount.",
      "options": [
        "orders.GroupBy(o => o.UserId).Select(g => new { UserId = g.Key, Total = g.Sum(o => o.Amount) })",
        "orders.Select(o => new { o.UserId, o.Amount }).Sum(o => o.Amount)",
        "orders.GroupBy(o => o.Amount).Select(g => new { UserId = g.Key, Total = g.Sum(o => o.Amount) })"
      ],
      "correctIndex": 0,
      "explanations": [
        "группировка по UserId и Sum по Amount внутри группы — верно",
        "Sum по всей коллекции без группировки — одна общая сумма",
        "группировка по Amount, а не по пользователю — неверный ключ"
      ]
    },
    {
      "id": 155,
      "question": "Найти Email, которые встречаются более одного раза в таблице Users.",
      "code": "users — таблица с полем Email",
      "options": [
        "SELECT Email FROM Users WHERE COUNT(*) > 1 GROUP BY Email",
        "SELECT Email, COUNT(*) FROM Users GROUP BY Email",
        "SELECT Email FROM Users GROUP BY Email HAVING COUNT(*) > 1"
      ],
      "correctIndex": 2,
      "explanations": [
        "COUNT(*) в WHERE недопустим, нужен HAVING",
        "Выводит все Email, а не только те, которые встречаются более одного раза",
        "GROUP BY Email и HAVING COUNT(*) > 1 — верно"
      ]
    },
    {
      "id": 156,
      "question": "Получить уникальные годы заказов, отсортированные по возрастанию.",
      "code": "orders — List<Order> с полем Created (DateTime)",
      "options": [
        "orders.Select(o => o.Created.Year).Distinct().OrderBy(y => y)",
        "orders.Distinct().OrderBy(o => o.Created.Year).Select(o => o.Created.Year)",
        "orders.OrderByDescending(o => o.Created.Year).Select(o => o.Created.Year).Distinct()"
      ],
      "correctIndex": 0,
      "explanations": [
        "Select года, Distinct, затем сортировка по значению года — верно",
        "Distinct по объектам Order, а не по году",
        "сортивовка по убыванию, а не по возрастанию"
      ]
    },
    {
      "id": 157,
      "question": "Вывести для каждой категории среднюю цену товара, учитывая только товары с ценой > 0.",
      "code": "Products - таблица товаров, каждый Product с полями CategoryId,Price",
      "options": [
        "SELECT CategoryId, AVG(Price) AS AVG_PRICE FROM Products GROUP BY CategoryId HAVING AVG_PRICE > 0",
        "SELECT CategoryId, AVG(Price) AS AVG_PRICE FROM Products GROUP BY CategoryId WHERE Price > 0",
        "SELECT CategoryId, AVG(Price) AS AVG_PRICE FROM Products WHERE Price > 0 GROUP BY CategoryId"
      ],
      "correctIndex": 2,
      "explanations": [
        "having фильтрует результаты после группировки, в итоге получаем категориии со средней ценой > 0",
        "WHERE не может идти после GROUP BY",
        "верно"
      ]
    },
    {
      "id": 158,
      "question": "Найти категорию с максимальным количеством товаров.",
      "code": "products — List<Product> с полем CategoryId",
      "options": [
        "products.GroupBy(p => p.CategoryId).Select(g => g.Key).First()",
        "products.GroupBy(p => p.CategoryId).OrderBy(g => g.Count()).First().Key",
        "products.GroupBy(p => p.CategoryId).OrderByDescending(g => g.Count()).First().Key"
      ],
      "correctIndex": 2,
      "explanations": [
        "без сортировки First() вернёт произвольную категорию",
        "OrderBy по возрастанию даёт категорию с минимумом товаров",
        "OrderByDescending по Count и First().Key — категория с максимумом — верно"
      ]
    },
    {
      "id": 159,
      "question": "Найти пользователей, у которых нет ни одного заказа.",
      "code": "Users - таблица пользователей, каждый User с полями Id, Orders - таблица заказов, каждый Order с полями UserId, Id",
      "options": [
        "SELECT u.Id FROM Users u JOIN Orders o ON u.Id = o.UserId WHERE o.Id IS NULL",
        "SELECT u.Id FROM Users u LEFT JOIN Orders o ON u.Id = o.UserId WHERE o.Id IS NULL",
        "SELECT u.Id FROM Users u WHERE NOT EXISTS Orders o WHERE o.UserId = u.Id"
      ],
      "correctIndex": 1,
      "explanations": [
        "Просто JOIN(он же Inner Join) не отсавляет записи которые не получилось ни с чем соеденить",
        "LEFT JOIN и проверка o.Id IS NULL — классический способ найти строки без связей — верно",
        "синтаксис NOT EXISTS неверен (нужен подзапрос - Select и т.д.)"
      ]
    },
    {
      "id": 160,
      "question": "Получить для каждого пользователя сумму оплаченных заказов (IsPaid = true).",
      "code": "orders — List<Order> с полями UserId, Amount, IsPaid",
      "options": [
        "orders.GroupBy(o => o.UserId).Select(g => new { g.Key, Total = g.Where(o => o.IsPaid).Sum(o => o.Amount) })",
        "orders.Where(o => o.IsPaid).Select(o => o.Amount).Sum()",
        "orders.GroupBy(o => o.IsPaid).Select(g => new { IsPaid = g.Key, Total = g.Sum(o => o.Amount) })"
      ],
      "correctIndex": 0,
      "explanations": [
        "верно",
        "Sum по всем заказам без разбиения по пользователям",
        "Возвращает список из двух записей - сколько суммарно оплачено и сколько суммарно не оплачено"
      ]
    },
    {
      "id": 161,
      "question": "Получить список категорий, в которых нет ни одного неактивного товара (IsActive = 0).",
      "code": "Products - таблица с полями CategoryId, IsActive",
      "options": [
        "SELECT CategoryId FROM Products GROUP BY CategoryId HAVING IsActive = 1",
        "SELECT CategoryId FROM Products GROUP BY CategoryId HAVING SUM(CASE WHEN IsActive = 0 THEN 1 ELSE 0 END) = 0",
        "SELECT CategoryId FROM Products WHERE IsActive = 1 GROUP BY CategoryId"
      ],
      "correctIndex": 1,
      "explanations": [
        "Having позволяет фильтровать только по агреггированным данных(то что указано в Group BY и то что вернут функции AVG,MIN,MAX,COUNT,SUM и т.д)",
        "Верно",
        "Вернёт группы в которых есть хотя бы один активный товар, а значит покажет и те группы в которых может быть и не активный"
      ]
    },
    {
      "id": 162,
      "question": "Посчитать средний размер заказа (OrderTotal) по каждому пользователю.",
      "code": "orders — List<Order> с полями UserId, Total",
      "options": [
        "orders.GroupBy(o => o.Total).Select(g => new { UserId = g.Key, Avg = g.Average(o => o.Total) })",
        "orders.Select(o => new { o.UserId, o.Total }).Average(o => o.Total)",
        "orders.GroupBy(o => o.UserId).Select(g => new { UserId = g.Key, Avg = g.Average(o => o.Total) })"
      ],
      "correctIndex": 2,
      "explanations": [
        "группировка по Total, а не по пользователю",
        "Average по всем заказам без деления по пользователям",
        "верно"
      ]
    },
    {
      "id": 163,
      "question": "Получить топ‑3 пользователей по суммарной стоимости заказов.",
      "code": "orders — List<Order> с полями UserId, Amount",
      "options": [
        "orders.GroupBy(o => o.UserId).Take(3).Select(g => g.Key)",
        "orders.GroupBy(o => o.UserId).OrderBy(g => g.Sum(o => o.Amount)).Take(3).Select(g => g.Key)",
        "orders.GroupBy(o => o.UserId).OrderByDescending(g => g.Sum(o => o.Amount)).Take(3).Select(g => g.Key)"
      ],
      "correctIndex": 2,
      "explanations": [
        "без сортировки Take(3) выберет произвольные группы",
        "OrderBy по возрастанию даёт пользователей с минимальной суммой",
        "OrderByDescending по сумме и Take(3) — верно"
      ]
    },
    {
      "id": 164,
      "question": "Найти все заказы, сумма которых выше средней суммы по всем заказам.",
      "code": "SQL: подзапрос с AVG",
      "options": [
        "SELECT * FROM Orders WHERE Amount > (SELECT AVG(Amount) FROM Orders)",
        "SELECT * FROM Orders WHERE Amount > AVG(Amount)",
        "SELECT * FROM Orders GROUP BY Amount HAVING Amount > AVG(Amount)"
      ],
      "correctIndex": 0,
      "explanations": [
        "верно",
        "AVG(как и другие аггрегационные функции т.к. SUM,MIN,MAX,COUNT) нельзя использовать в WHERE",
        "Having позволяет фильтровать только по агреггированным данных(то что указано в Group BY и то что вернут функции AVG,MIN,MAX,COUNT,SUM и т.д)"
      ]
    },
    {
      "id": 165,
      "question": "Получить список пользователей и количество их заказов, включая тех, у кого заказов нет.",
      "code": "SQL: LEFT JOIN, GROUP BY, COUNT",
      "options": [
        "SELECT u.Id, COUNT(o.Id) FROM Users u JOIN Orders o ON u.Id = o.UserId GROUP BY u.Id",
        "SELECT u.Id, COUNT(*) FROM Users u LEFT JOIN Orders o ON u.Id = o.UserId GROUP BY o.UserId",
        "SELECT u.Id, COUNT(o.Id) FROM Users u LEFT JOIN Orders o ON u.Id = o.UserId GROUP BY u.Id"
      ],
      "correctIndex": 2,
      "explanations": [
        "INNER JOIN убирает пользователей без заказов",
        "GROUP BY по o.UserId теряет пользователей без заказов (NULL)",
        "LEFT JOIN и GROUP BY по u.Id считают и нулевые заказы — верно"
      ]
    },
    {
      "id": 166,
      "question": "Получить из списка заказов пары (UserId, MaxAmount) — максимальная сумма заказа пользователя.",
      "code": "orders — List<Order> с полями UserId, Amount",
      "options": [
        "orders.Select(o => new { o.UserId, o.Amount }).Max(o => o.Amount)",
        "orders.GroupBy(o => o.UserId).Select(g => new { UserId = g.Key, MaxAmount = g.Max(o => o.Amount) })",
        "orders.GroupBy(o => o.Amount).Select(g => new { UserId = g.Key, MaxAmount = g.Max(o => o.Amount) })"
      ],
      "correctIndex": 1,
      "explanations": [
        "Max без группировки даёт один максимум по всем пользователям",
        "верно",
        "группировка по Amount, а не по пользователю"
      ]
    },
    {
      "id": 167,
      "question": "Для каждого месяца получить количество заказов. Использовать MONTH(Created).",
      "code": "Orders - таблица с полями Created,Id",
      "options": [
        "SELECT MONTH(Created), COUNT(*) FROM Orders GROUP BY Created",
        "SELECT MONTH(Created) AS M, COUNT(*) FROM Orders GROUP BY M",
        "SELECT MONTH(Created) AS M, COUNT(*) FROM Orders GROUP BY MONTH(Created)"
      ],
      "correctIndex": 2,
      "explanations": [
        "GROUP BY Created группирует по полной дате, а не по месяцу",
        "использование алиаса M в GROUP BY не разрешено(а жаль)",
        "GROUP BY тем же выражением MONTH(Created) надёжно группирует по месяцу — верно"
      ]
    },
    {
      "id": 168,
      "question": "Получить пользователей, у которых все заказы имеют статус 'Paid'.",
      "code": "orders — List<Order> с полями UserId, Status",
      "options": [
        "orders.GroupBy(o => o.UserId).Where(g => g.All(o => o.Status = \"Paid\").Select(g => g.Key)",
        "orders.Where(o => o.Status == \"Paid\").GroupBy(o => o.UserId).Select(g => g.Key)",
        "orders.GroupBy(o => o.UserId).Where(g => g.All(o => o.Status == \"Paid\")).Select(g => g.Key)"
      ],
      "correctIndex": 2,
      "explanations": [
        "o.Status = \"Paid\" - присвоение а не сравнение, ошибка компиляции",
        "фильтрация только Paid не гарантирует, что у пользователя нет других статусов",
        "верно"
      ]
    },
    {
      "id": 169,
      "question": "Найти категории, в которых хотя бы один товар дороже 1000 и хотя бы один дешевле 100.",
      "code": "SQL: GROUP BY, HAVING с двумя условиями",
      "options": [
        "SELECT CategoryId FROM Products GROUP BY CategoryId HAVING Price > 1000 AND Price < 100",
        "SELECT CategoryId FROM Products GROUP BY CategoryId HAVING MAX(Price) > 1000 AND MIN(Price) < 100",
        "SELECT CategoryId FROM Products WHERE Price > 1000 AND Price < 100 GROUP BY CategoryId"
      ],
      "correctIndex": 1,
      "explanations": [
        "Having позволяет фильтровать только по агреггированным данных(то что указано в Group BY и то что вернут функции AVG,MIN,MAX,COUNT,SUM и т.д)",
        "одновременное условие по MAX и MIN в HAVING — верно",
        "Price > 1000 и Price < 100 одновременно невозможны для одной строки"
      ]
    },
    {
      "id": 170,
      "question": "Посчитать количество заказов для каждого статуса Status в виде словаря (ключ — Status, значение — Count).",
      "code": "orders — List<Order> с полем Status",
      "options": [
        "orders.GroupBy(o => o.Status).ToDictionary(g => g.Key, g => g.Count())",
        "orders.GroupBy(o => o.Status).Select(g => new { g.Key, g.Count })",
        "orders.ToDictionary(o => o.Status, o => o.Count())"
      ],
      "correctIndex": 0,
      "explanations": [
        "верно",
        "Select создаёт анонимные объекты, но не словарь",
        "Count() нельзя вызывать на отдельном объекте Order"
      ]
    },
    {
      "id": 171,
      "question": "Получить суммы продаж по каждой дате.",
      "code": "CAST(Created AS date) возвращает только дату из поля с датой и временем",
      "options": [
        "SELECT CAST(Created AS date) AS D, SUM(Amount) FROM Orders GROUP BY CAST(Created AS date)",
        "SELECT CAST(Created AS date) AS D, SUM(Amount) FROM Orders GROUP BY Created",
        "SELECT Created, SUM(Amount) FROM Orders GROUP BY Created"
      ],
      "correctIndex": 0,
      "explanations": [
        "верно",
        "GROUP BY Created группирует по дате и времени",
        "GROUP BY Created группирует по дате и времени, ещё и результат без алиасов"
      ]
    }
  ];


// ===== КЭШ =====
const STORAGE_KEY = "task_results";

function getResults() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function saveResult(taskId, isCorrect) {
    const results = getResults();
    results[taskId] = isCorrect;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

// ===== UI =====
const taskContent = document.getElementById("task-content");
const taskListEl = document.getElementById("task-list");
const taskListWrap = document.getElementById("task-list-wrap");
const taskListToggle = document.getElementById("task-list-toggle");
const taskListOverlay = document.getElementById("task-list-overlay");
const taskListClose = document.getElementById("task-list-close");

let currentTaskIndex = 0;

function getInitialTaskIndex() {
    const results = getResults();
    let lastCompletedIndex = -1;
    for (let i = 0; i < tasks.length; i++) {
        if (results[tasks[i].id]) lastCompletedIndex = i;
    }
    return Math.min(lastCompletedIndex + 1, tasks.length - 1);
}

function openTaskListPanel() {
    if (taskListWrap) taskListWrap.classList.add("is-open");
    if (taskListOverlay) {
        taskListOverlay.classList.add("is-open");
        taskListOverlay.setAttribute("aria-hidden", "false");
    }
}

function closeTaskListPanel() {
    if (taskListWrap) taskListWrap.classList.remove("is-open");
    if (taskListOverlay) {
        taskListOverlay.classList.remove("is-open");
        taskListOverlay.setAttribute("aria-hidden", "true");
    }
}

function escapeHtml(text) {
    if (text == null) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function buildExplanationHtml(task) {
    const ci = task.correctIndex;
    const correctOpt = task.options[ci];
    const correctEscaped = escapeHtml(correctOpt);
    if (task.explanations && Array.isArray(task.explanations) && task.explanations.length === 3) {
        return task.options.map((opt, i) => {
            const expl = escapeHtml(task.explanations[i] || "");
            const isCorrect = i === ci;
            return `<div class="explanation-item ${isCorrect ? "explanation-correct" : "explanation-wrong"}">
                <span class="explanation-marker">${isCorrect ? "✓" : "✗"}</span>
                <span class="explanation-option">${escapeHtml(opt)}</span>
                <span class="explanation-text">— ${expl}</span>
            </div>`;
        }).join("");
    }
    const wrongOpts = task.options.filter((_, i) => i !== ci).map(o => escapeHtml(o)).join("; ");
    return `<p class="explanation-generic"><strong>Правильный ответ:</strong> ${correctEscaped}</p>
        <p class="explanation-generic">Остальные варианты неверны или не соответствуют условию задачи.</p>`;
}

function renderTaskList() {
    const results = getResults();
    taskListEl.innerHTML = "";

    tasks.forEach((task, index) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "task-list-item";
        if (index === currentTaskIndex) item.classList.add("current");
        if (results[task.id]) item.classList.add("completed");
        item.textContent = `${task.id}. ${task.question}`;
        item.onclick = () => {
            currentTaskIndex = index;
            renderTaskList();
            renderCurrentTask();
            closeTaskListPanel();
        };
        taskListEl.appendChild(item);
    });
}

function renderCurrentTask() {
    const task = tasks[currentTaskIndex];
    const results = getResults();

    const questionEscaped = escapeHtml(task.question);
    const codeEscaped = escapeHtml(task.code);

    let optionsHtml = "";
    task.options.forEach((opt, index) => {
        const optEscaped = escapeHtml(opt);
        optionsHtml += `
            <label class="option" data-option-index="${index}">
                <input type="radio" name="current_task" value="${index}">
                <span class="option-text">${optEscaped}</span>
            </label>
        `;
    });

    const explanationHtml = buildExplanationHtml(task);

    taskContent.innerHTML = `
        <div class="task" id="current-task-card">
            <div class="task-question-row">
                <b>${currentTaskIndex+1}</b>.<strong class="task-question">${questionEscaped}</strong>
                <button type="button" class="task-explanation-toggle" id="explanation-toggle" aria-label="Показать пояснение" title="Почему этот ответ правильный?">❓</button>
            </div>
            <div class="task-explanation" id="task-explanation" aria-hidden="true">
                ${explanationHtml}
            </div>
            <pre class="task-code">${codeEscaped}</pre>
            ${optionsHtml}
            <button type="button" id="check-btn">Проверить</button>
        </div>
    `;

    const explanationToggle = taskContent.querySelector("#explanation-toggle");
    const explanationBlock = taskContent.querySelector("#task-explanation");
    if (explanationToggle && explanationBlock) {
        explanationToggle.addEventListener("click", () => {
            const isOpen = explanationBlock.classList.toggle("is-open");
            explanationToggle.setAttribute("aria-label", isOpen ? "Скрыть пояснение" : "Показать пояснение");
            explanationBlock.setAttribute("aria-hidden", !isOpen);
        });
    }

    taskContent.classList.remove("flash-correct", "flash-wrong");

    const checkBtn = taskContent.querySelector("#check-btn");
    checkBtn.onclick = () => {
        const checked = taskContent.querySelector("input:checked");
        if (!checked) return;

        const selectedIndex = Number(checked.value);
        const isCorrect = selectedIndex === task.correctIndex;

        if (isCorrect) {
            saveResult(task.id, true);
            taskContent.classList.add("flash-correct");
            renderTaskList();

            setTimeout(() => {
                taskContent.classList.remove("flash-correct");
                if (currentTaskIndex < tasks.length - 1) {
                    currentTaskIndex++;
                    renderTaskList();
                    renderCurrentTask();
                } else {
                    renderCurrentTask();
                }
            }, 1000);
        } else {
            const selectedLabel = taskContent.querySelector(`.option[data-option-index="${selectedIndex}"]`);
            selectedLabel.classList.add("wrong-answer");
            setTimeout(() => selectedLabel.classList.remove("wrong-answer"), 1500);
        }
    };
}

function render() {
    renderTaskList();
    renderCurrentTask();
}

if (taskListToggle) taskListToggle.addEventListener("click", openTaskListPanel);
if (taskListOverlay) taskListOverlay.addEventListener("click", closeTaskListPanel);
if (taskListClose) taskListClose.addEventListener("click", closeTaskListPanel);

currentTaskIndex = getInitialTaskIndex();
render();

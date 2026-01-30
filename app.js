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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Как из Controller передать данные во View?",
      "code": "Передать список продуктов",
      "options": [
        "View.Data = products; return View();",
        "return View(products);",
        "Response.Write(products); return View();"
      ],
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 1
    },
    {
      "id": 21,
      "question": "Где хранится разметка по умолчанию в ASP.NET Core?",
      "code": "Layout",
      "options": [
        "Layout.html в Views",
        "Default.cshtml в Pages",
        "_Layout.cshtml в Shared"
      ],
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 2
    },
    {
      "id": 72,
      "question": "Как в Controller получить данные из тела POST-запроса?",
      "code": "JSON в теле запроса",
      "options": [
        "Request.Body.Read()",
        "Параметр действия с [FromBody] или модель с привязкой",
        "Request.Post[\"data\"]"
      ],
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 0
    },
    {
      "id": 84,
      "question": "Как вывести список с в формате \"элемент, индекс_элемента\"?",
      "code": "Model — список, нужен номер строки",
      "options": [
        "foreach (var (i, item) in list.Select((x, i) => (x,i))) { Console.WriteLine($\"{item}, {i}\"); }}",
        "for (var i = 0; i < list.Count; i++) { Console.WriteLine(\"item[i], i\"); }",
        "list.ForEach((item) => Console.WriteLine(item))"
      ],
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 2
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
      "correctIndex": 0
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
      "correctIndex": 1
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
      "correctIndex": 2
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
      "correctIndex": 1
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
      "correctIndex": 0
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
      "correctIndex": 2
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
      "correctIndex": 1
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

let currentTaskIndex = 0;

function escapeHtml(text) {
    if (text == null) return "";
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
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

    taskContent.innerHTML = `
        <div class="task" id="current-task-card">
            <b>${currentTaskIndex+1}</b>.<strong class="task-question">${questionEscaped}</strong>
            <pre class="task-code">${codeEscaped}</pre>
            ${optionsHtml}
            <button type="button" id="check-btn">Проверить</button>
        </div>
    `;

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

render();

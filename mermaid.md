### 流程图

```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

### 时序图

```mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
loop Healthcheck
    John->>John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John-->>Alice: Great!
John->>Bob: How about you?
Bob-->>John: Jolly good!
```

### 甘特图

```mermaid
gantt
    section Section
    Completed :done,    des1, 2014-01-06,2014-01-08
    Active        :active,  des2, 2014-01-07, 3d
    Parallel 1   :         des3, after des1, 1d
    Parallel 2   :         des4, after des1, 1d
    Parallel 3   :         des5, after des3, 1d
    Parallel 4   :         des6, after des4, 1d
```



### 类图

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
<<Interface>> Class01
Class09 --> C2 : Where am I?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}
```

### 状态图

```mermaid
stateDiagram-v2
[*] --> Still
Still --> [*]
Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
```

### 饼图

```mermaid
pie
"Dogs" : 386
"Cats" : 85
"Rats" : 15
```

### 用户体验旅程图

```mermaid
  journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 3: Me
```

### C4 图

```mermaid
C4Context
title System Context diagram for Internet Banking System

Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
Person(customerB, "Banking Customer B")
Person_Ext(customerC, "Banking Customer C")
System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

Enterprise_Boundary(b1, "BankBoundary") {

  SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

  System_Boundary(b2, "BankBoundary2") {
    System(SystemA, "Banking System A")
    System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts.")
  }

  System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
  SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

  Boundary(b3, "BankBoundary3", "boundary") {
    SystemQueue(SystemF, "Banking System F Queue", "A system of the bank, with personal bank accounts.")
    SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
  }
}

BiRel(customerA, SystemAA, "Uses")
BiRel(SystemAA, SystemE, "Uses")
Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
Rel(SystemC, customerA, "Sends e-mails to")
```

### 单选

* [x] v1.0 基于 vue2.6+，支持所有主流的浏览器，实现表格的一切实用的功能

### 跳转

[`tableList`](JS.md)

  | [E](JS.md)

### 拼音

<ruby>拼音<rt>pīn yīn</rt></ruby>

### HTML表格

<table>
    <thead>
        <tr>
            <td bgcolor=#FFFFFF>
                <b><font size = 5 >类别</font></b>
            </td>
            <td bgcolor=#FFFFFF>
                <b><font size = 5 >辞书行</font></b>
            </td>
            <td bgcolor=#FFFFFF>
                <b><font size = 5 >ます形</font></b>
            </td>
            <td bgcolor=#FFFFFF rowspan="2">
                <b><font size = 5 >て形</font></b>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td  rowspan="2"><font color=#FF33CC>~い</font ></td>
            <td bgcolor=#00FF66><font color=#FF33CC>～く　ない</font ></td>
            <td><font color=#FF33CC>～かった</font ></td>
            <td><font color=#FF33CC>～くなかった</font ></td>
        </tr>
        <tr>
            <td>
                <ruby>暑<rt>あつ</rt></ruby>
                <font color=#FF33CC>い</font >
            </td>
            <td colspan="2" bgcolor=#00FF66>
                <ruby>暑<rt>あつ</rt></ruby>
                <font color=#FF33CC>くない</font >
            </td>
        </tr>
    </tbody>
</table>
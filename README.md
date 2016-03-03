# map

### Map Function
      fun map (f,xs) =
            case xs of
                  [] => []
            | first::rest => (f first)::(map(f, rest))

---

### Examples using map
(* fn x => x + <y> where y is a random number [1 to 9] *)
val myList = [4,8,12,16]
val ans = map ((fn x => x + 1), myList) (* answer: [5,9,13,17] *)

(* only multiple by 2, 3, 4 or 5 to keep the math simple *)
val myList = [4,8,12,16]
val ans = map ((fn x => x * 2), myList) (* answer: [8, 16, 24, 32] *)

(* list of lists; [2 to 4] sublists; each sublist should have [1 to 3] random numbers [0, 9] *)
val myList = [[1,2],[3,4],[5,6,7]]
val ans = map (hd, myList) (* answer: [1,3,5] *)

(* list of lists; [2 to 4] sublists; each sublist should have [0 to 3] random numbers [0, 9] *)
val myList = [[1,2],[],[5,6,7]]
val ans = map (null, myList) (* answer: [false, true, false] *)

val myList = ["soup", "dog", "orange", "park", "cat", "helps", "talks", "castle", "genius", "flaming"]  <---- choose 3 to 9 randomly
val ans = map (String.size, myList)  (* answer: [4, 3, 6, 4, ...] *)

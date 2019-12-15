fun transcribeToRna(dna: String): String {

  return dna.split("").map { 
    when(it) {
      "C" -> "G"
      "G" -> "C"
      "T" -> "A"
      "A" -> "U"
      else -> ""
    }
  }.joinToString("")

} 

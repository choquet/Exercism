object Pangram {

    fun isPangram(input: String): Boolean = "abcdefghijklmnopqrstuvwxyz".split("").all {input.contains(it, true)}
    
}

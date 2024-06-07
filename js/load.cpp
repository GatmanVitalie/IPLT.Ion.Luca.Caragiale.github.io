#include <fstream>
#include <iostream>
#include <random>
#include <string>

using namespace std;

string generateRandomString(size_t length) {
  const string characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  random_device rd;
  mt19937 generator(rd());
  uniform_int_distribution<> distribution(0, characters.size() - 1);

  std::string randomString;
  for (size_t i = 0; i < length; ++i) {
    randomString += characters[distribution(generator)];
  }

  return randomString;
}

std::string escapeBackslashes(const std::string &str) {
  std::string result;
  result.reserve(str.length() *
                 2); // Reserve enough space for the worst-case scenario

  for (char ch : str) {
    result.push_back(ch);
    if (ch == '\\') {
      result.push_back(
          '\\'); // Insert an additional backslash after each existing backslash
    }
  }

  return result;
}

string removeQuotes(const std::string &str) {
  if (str.length() >= 2 && str.front() == '"' && str.back() == '"') {
    return str.substr(1, str.length() -
                             2); // Remove the first and last character (quotes)
  }
  return str; // Return the string as is if it doesn't start and end with quotes
}

bool copyFile(const std::string &sourcePath,
              const std::string &destinationPath) {
  std::ifstream source(sourcePath, std::ios::binary);
  std::ofstream destination(destinationPath, std::ios::binary);

  if (!source.is_open() || !destination.is_open()) {
    std::cerr << "Error opening file.\n";
    return false;
  }

  destination << source.rdbuf();

  source.close();
  destination.close();

  return true;
}

string extension(string ext) {
  string tmp = "";
  bool bl = 0;
  for (int i = 0; i < ext.length(); i++) {
    if (ext[i] == '.' || bl) {
      bl = 1;

      tmp += ext[i];
    }
  }
  return tmp;
}
void insertStringAtLine(const std::string &filename,
                        const std::string &strToInsert, int lineNumber) {
  std::ifstream inFile(filename);
  std::ofstream outFile("temp.json"); // Create a temporary file

  if (!inFile.is_open()) {

    return;
  }
  if (!outFile.is_open()) {
    return;
  }

  std::string line;
  int currentLineNumber = 1;

  // Copy lines from the input file to the output file
  while (std::getline(inFile, line)) {
    if (currentLineNumber == lineNumber) {
      // Insert the string at the specified position
      outFile << strToInsert << std::endl;
    }
    outFile << line << std::endl;
    currentLineNumber++;
  }

  inFile.close();
  outFile.close();

  // Rename the temporary file to the original filename
  std::remove(filename.c_str());
  std::rename("temp.json", filename.c_str());
}

int main() {
  ios_base::sync_with_stdio(0);
  string data, tmp;
  while (1) {


    cout << "titlu: ";
    getline(cin, data);
    insertStringAtLine("news.json", "{\n\"title\": \"" + data + "\",", 3);

    cout << "imagine: ";
    getline(cin, data);
    data = removeQuotes(data);
    data = escapeBackslashes(data);
    tmp = "server_images/" + generateRandomString(6) + extension(data);
    if (copyFile(data, tmp)) {
      std::cout << "File copied successfully.\n";
    } else {
      std::cout << "File copy failed.\n";
    }
    insertStringAtLine("news.json", "\"image_link\": \"" + tmp + "\",", 5);

    cout << "descrierea: ";
    getline(cin, data);
    while (1) {
      getline(cin, tmp);
      if (tmp == "") {
        break;
      }
      data += "<br>" + tmp;
    }
    insertStringAtLine("news.json", "\"descriere\": \"" + data + "\",", 6);

    cout << "data: ";
    getline(cin, data);
    insertStringAtLine("news.json", "\"data\": \"" + data + "\"", 7);
    insertStringAtLine("news.json", "},", 8);
    cout << '\n' << '\n';
  }

  return 0;
}

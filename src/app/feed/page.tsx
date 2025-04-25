export default function FeedPage() {
  const posts = [
    {
      id: 1,
      title: "Naapuri-illan tiedote",
      content: "Tervetuloa naapuri-iltaan ensi lauantaina klo 18 taloyhtiön kerhohuoneelle!",
      author: "Maija Meikäläinen",
      createdAt: "2025-04-24",
    },
    {
      id: 2,
      title: "Löytötavara: pyöränavain",
      content: "Pyörävarastosta löytyi pyöränavain. Saa hakea A-rapun ilmoitustaulun alta.",
      author: "Pekka Esimerkki",
      createdAt: "2025-04-23",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Taloyhtiön ilmoitustaulu</h1>

      <div className="flex justify-center mb-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-transform duration-300">
          + Uusi ilmoitus
        </button>
      </div>

      <div className="space-y-8 flex flex-col items-center">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-80 bg-gradient-to-r from-white to-gray-50 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 rounded-3xl border border-gray-200 hover:border-blue-400 transform hover:-translate-y-1 hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-3">
              {new Date(post.createdAt).toLocaleDateString()} — {post.author}
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">{post.content}</p>

            <div className="flex justify-end">
              <button className="px-3 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200">
                Kommentoi
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AICharacterHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-8">
      <style jsx global>{`
        .glass {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <div className="max-w-4xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            🤖 AI Character Hub
          </h1>
          <p className="text-2xl text-slate-300 max-w-2xl mx-auto">
            Create AI characters, chat in real-time, generate stunning images
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all group">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:rotate-12">
              🤖
            </div>
            <h3 className="text-3xl font-bold mb-2">3</h3>
            <p className="text-slate-400 text-lg">Characters</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all group">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:rotate-12">
              🖼️
            </div>
            <h3 className="text-3xl font-bold mb-2">12</h3>
            <p className="text-slate-400 text-lg">Images</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all group">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:rotate-12">
              💬
            </div>
            <h3 className="text-3xl font-bold mb-2">5</h3>
            <p className="text-slate-400 text-lg">Active Chats</p>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <a href="#create" className="glass p-10 rounded-4xl hover:scale-105 transition-all group block">
            <div className="w-28 h-28 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 rounded-3xl mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-all">
              ➕
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Create Character</h3>
            <p className="text-slate-400 text-center">Custom personalities & backstories</p>
          </a>
          
          <a href="#images" className="glass p-10 rounded-4xl hover:scale-105 transition-all group block">
            <div className="w-28 h-28 bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600 rounded-3xl mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-all">
              ✨
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">AI Images</h3>
            <p className="text-slate-400 text-center">Text-to-image generator</p>
          </a>
          
          <a href="#chat" className="glass p-10 rounded-4xl hover:scale-105 transition-all group block">
            <div className="w-28 h-28 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-3xl mx-auto mb-8 flex items-center justify-center text-4xl group-hover:scale-110 transition-all">
              💬
            </div>
            <h3 className="text-3xl font-bold mb-4 text-center">Live Chat</h3>
            <p className="text-slate-400 text-center">Real-time conversations</p>
          </a>
        </div>

        {/* LIVE CHAT */}
        <div id="chat" className="glass p-10 rounded-4xl mb-16">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mr-6 text-2xl font-bold">
              N
            </div>
            <div>
              <h3 className="text-2xl font-bold">Nova - Cyberpunk Hacker</h3>
              <div className="flex items-center text-sm text-emerald-400">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8 h-64 overflow-y-auto p-4 bg-white/5 rounded-3xl">
            <div className="bg-white/10 p-4 rounded-3xl ml-auto max-w-xs">
              Hey! Tell me about your character idea ✨
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-3xl max-w-xs">
              <strong>Nova:</strong> I'm ready to hack reality with you! What kind of character should we create?
            </div>
          </div>
          
          <div className="flex gap-4">
            <input id="message" className="flex-1 bg-white/10 p-5 rounded-3xl text-white placeholder-slate-400 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/30" placeholder="Type your message..."/>
            <button onclick="sendMessage()" className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 px-8 py-5 rounded-3xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
              Send →
            </button>
          </div>
        </div>
      </div>
      
      <script>
        function sendMessage() {
          const msg = document.getElementById('message');
          const chat = document.querySelector('.overflow-y-auto');
          chat.innerHTML += `<div class="bg-white/10 p-4 rounded-3xl ml-auto max-w-xs animate-slide-in">${msg.value}</div>`;
          msg.value = '';
          setTimeout(() => {
            chat.innerHTML += `<div class="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-3xl max-w-xs animate-slide-in"><strong>Nova:</strong> Amazing idea! Let me help you build that character... ✨</div>`;
            chat.scrollTop = chat.scrollHeight;
          }, 1000);
        }
      </script>
    </div>
  );
}
